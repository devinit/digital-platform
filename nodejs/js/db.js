
var db=exports;

var fs = require('fs');
var util=require('util');
var path=require('path');
var co = require('co');

var thenify = require('thenify');
var csv_parse = thenify(require('csv-parse'));
var csv_stringify = thenify(require('csv-stringify'));

var pgp_options = {};
if(argv.verbose){ require("pg-monitor").attach(pgp_options); } // enable database logging to console
var pgp = require('pg-promise')(pgp_options);

var datamap=require('./datamap')

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
// use csv names
db.rebuild_array_and_fix_names=function(rin){
	var head;
	var ret=[];
	for(var i in rin){var v=rin[i];
// build head
		if(!head)
		{
			head=[];
			for(var iv in v){var vv=v[iv];
				head.push( iv );
			}
			var r=[];
			ret.push(r);
			for(var iv in head){r.push( db.under_to_dash( head[iv] ) );}
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
//				console.log(vr.table_schema+"."+vr.table_name);
			}
		}
//		ls(r);
		
//		var r=yield d.query("SELECT * FROM public.di_concept_in_ddw;");
//		ls(r);

//		var r=yield d.query("SELECT * FROM public.di_concept_in_dh;");
//		ls(r);

//		var r=yield d.query("SELECT * FROM data.\"2015_09_17\" LIMIT 200;");
//		ls(r);

		for(var i in datamap.raw){ v=datamap.raw[i];
			var r=yield d.query('SELECT COUNT(*) FROM '+v.table+';');
			console.log(v.table,r[0].count);
		}


		
		d.done();

	}).then(function(v){},function(e){console.error(e.stack);process.exit();});

	db.end(); // exit when database callbacks finish, otherwise we sit and wait forever?

};


// export data
db.import=function()
{
// run a yieldable coroutine (requires ES6)
// This  reduces callback hell / excessive use of unnamed function 
	co(function*(){
		var d=yield db.start().connect();

		for(var i in datamap.raw){ v=datamap.raw[i];
			
			if(v.csv)
			{

				var r=yield d.query('SELECT * FROM '+v.table+';');
				console.log(argv.csvdir+v.csv+" <- "+v.table+" ["+r.length+"]" );

				c=db.rebuild_array_and_fix_names(r);
				
//				ls(c);

				var s=yield csv_stringify(c);
//				print(s);
				
				fs.writeFileSync( argv.csvdir+v.csv , s );


//process.exit();
			}
						
		}
		
		d.done();

	}).then(function(v){},function(e){console.error(e.stack);process.exit();});

	db.end(); // exit when database callbacks finish, otherwise we sit and wait forever?

};

