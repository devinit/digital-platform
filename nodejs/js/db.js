
var db=exports;

var fs = require('fs');
var util=require('util');
var path=require('path');
var co = require('co');

var pgp_options = {};
if(argv.verbose){ require("pg-monitor").attach(pgp_options); } // enable database logging to console
var pgp = require('pg-promise')(pgp_options);


var ls=function(a) { console.log(util.inspect(a,{depth:null})); }

// get pgp using given host or the default host
db.start=function(database)
{
	return pgp( database || argv.database );
};

db.end=function()
{
	return pgp.end();
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
			if(vr.table_schema.slice(0,3)!="pg_"){
				console.log(vr.table_schema+"."+vr.table_name);
			}
		}
//		ls(r);
		
		
		d.done();

	}).then(function(v){},function(e){console.error(e.stack);process.exit();});

	db.end(); // exit when database callbacks finish, otherwise we sit and wait forever?

};
