
var fs = require('fs');
var util=require('util');
var path=require('path');

var ls=function(a) { console.log(util.inspect(a,{depth:null})); }

// global.argv
var argv=require('yargs').argv; global.argv=argv;

argv.database=argv.database||"postgres";
argv.csvdir=argv.cache||"../";


	if( argv._[0]=="import" )
	{
		require("./import").import_all();
		return;		
	}

	// help text
	console.log(
		"\n"+
		">	warehouse import \n"+
		"Import all warehouse data into local CSV files.\n"+
		"\n"+
		"\n"+
	"");

});
