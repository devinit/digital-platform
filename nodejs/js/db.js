
var db=exports;

var fs    =require('fs');
var stream=require('stream');
var util  =require('util');
var path  =require('path');
var co    =require('co');

//var thenify = require('thenify');
//var csv_parse = thenify(require('csv-parse'));
//var csv_stringify = thenify(require('csv-stringify'));

var pgp_options = {};
if(argv.verbose){ require("pg-monitor").attach(pgp_options); } // enable database logging to console
var pgp = require('pg-promise')(pgp_options);

var pgps=require('pg-query-stream');

var csv=require('./csv');
var datamap=require('./datamap');

var print=console.log;
var ls=function(a) { print(util.inspect(a,{depth:null})); }

// get pgp using given host or the default host
db.start=function(database)
{
	return pgp( database || argv.database );
};

db.end=function()
{
	return pgp.end();
};

db.under_to_dash=function(s){ return s.split("_").join("-"); };
db.dash_to_under=function(s){ return s.split("-").join("_"); };

// oneway defluff to fix the fixes that fixed the thing that wasnt broken
db.defluff=function(s){
	s=s.split("value-bottom-20pc").join("income-share-bottom-20pc");
	s=s.split("value-second-20pc").join("income-share-second-20pc");
	s=s.split("value-third-20pc").join("income-share-third-20pc");
	s=s.split("value-fourth-20pc").join("income-share-fourth-20pc");
	s=s.split("value-highest-20pc").join("income-share-highest-20pc");
	s=s.split("from-di-id").join("id-from");
	s=s.split("to-di-id").join("id-to");
	s=s.split("di-id").join("id");

	s=s.split("value-pop-rur").join("population-rural");
	s=s.split("value-pop-urb").join("population-urban");

	return s;
};
// 
db.rename_headers=function(head,func)
{
	func=func||db.under_to_dash; // default replace _ with - (because...)
	var r=[];
	for(var iv in head){r.push( db.defluff(func( head[iv] ) ) );}
	return r;
};

// make a csv style array of arrays with the first one a header
// rin is an array of objects
// you may pass in your own head (else it will autocreate and be appended to ret, so probably ret[0])
// and if you want to append to a partial array, you  may pass that in too as ret
// both head and ret are optional extra params which we will autocreate if missing

db.rebuild_array=function(rin,head,ret){
	var ret=ret || [];
	for(var i in rin){var v=rin[i];
// build head
		if(!head)
		{
			head=[];
			for(var iv in v){var vv=v[iv];
				if( iv!="row_id" ) // ignore row_id
				{
					head.push( iv );
				}
			}
			var r=[];
			ret.push(r);
			for(var iv in head){r.push( ( head[iv] ) );}
		}
// data
		{
			var r=[];
			ret.push(r);
			for(var iv in head){var vv=v[ head[iv] ];
				r.push(vv);
			}
		}
	}
	return ret;
}

// a stream to convert rows into a csv file
function stream_to_csv(options) {
	options=options || {objectMode: true};
	stream.Transform.call(this, options);
}
util.inherits(stream_to_csv, stream.Transform);
stream_to_csv.prototype._transform = function (v, enc, cb) {

	var s;
	
	if(!this.csv)
	{
		this.csv={count:0,last:0};
		var a=db.rebuild_array([v]);
		this.csv.head=a[0]; // remember the header for later lines
		s=csv.array_to_line( db.rename_headers(a[0]) ); // header
		s=s+csv.array_to_line( a[1] ); // first dataline
	}
	else
	{
		var a=db.rebuild_array([v],this.csv.head);
		s=csv.array_to_line( a[0] ); // dataline
	}
	
	this.csv.count++;
	if(this.csv.count >= this.csv.last+1000 ){
		this.csv.last+=1000;
		process.stdout.write(".");
	}

	this.push(s);
	cb();
};



// test some bits and bobs
db.test=function()
{

// run a yieldable coroutine (requires ES6)
// This  reduces callback hell / excessive use of unnamed function 
	co(function*(){
		var d=yield db.start().connect();

//		var r=yield d.query("EXPLAIN ANALYSE SELECT distinct(year) FROM data_series.poverty_125;");
//		ls(r);

		var r=yield d.query("SELECT * FROM information_schema.tables ORDER BY table_schema,table_name;");
		for(var ir in r) { var vr=r[ir];
			if( vr.table_schema!="pg_catalog" && vr.table_schema!="information_schema" ){ // ignore internal junk
				console.log("{ \"dw\":\""+vr.table_schema+"."+vr.table_name+"\" },");
			}
		}
//		ls(r);
		
//		var r=yield d.query("SELECT * FROM public.di_concept_in_ddw;");
//		ls(r);

//		var r=yield d.query("SELECT * FROM public.di_concept_in_dh;");
//		ls(r);

//		var r=yield d.query("SELECT * FROM data.\"2015_09_17\" LIMIT 200;");
//		ls(r);

//		for(var i in datamap.raw){ v=datamap.raw[i];
//			var r=yield d.query('SELECT COUNT(*) FROM '+v.table+';');
//			console.log(v.table,r[0].count);
//		}

console.log( JSON.stringify(datamap.csv,null,1) );


		
		d.done();

	}).then(function(v){},function(e){console.error(e.stack);process.exit();});

	db.end(); // exit when database callbacks finish, otherwise we sit and wait forever?

};




// export data
db.import=function(only)
{
// run a yieldable coroutine (requires ES6)
// This  reduces callback hell / excessive use of unnamed function 
	co(function*(){
		var d=yield db.start().connect();

		for(var csv_name in datamap.csv){ var csv_sql=datamap.csv[csv_name];

			if((!only)||(only==csv_name))
			{
				process.stdout.write(argv.csvdir+csv_name+" <- "+csv_sql+" ");

				var fp=fs.createWriteStream(argv.csvdir+csv_name);
				var qs = new pgps('SELECT * FROM '+csv_sql+';');
				var sd=yield d.stream(qs, function (s) {
						s.pipe(new stream_to_csv()).pipe(fp);
				});
				fp.end();
				process.stdout.write("\n");
			}
		}
		
		d.done();

	}).then(function(v){},function(e){console.error(e.stack);process.exit();});

	db.end(); // exit when database callbacks finish, otherwise we sit and wait forever?

};

