
var cmd=exports;

var fs = require('fs');
var util=require('util');
var path=require('path');

var ls=function(a) { console.log(util.inspect(a,{depth:null})); }


// set defaults if unset
// settings come from commandline then environemnt then defaults
// environment variables have a warehouse_ prefix

cmd.defaults=function(argv)
{
	console.log("")

// how/where to connect to postgres
	argv.database	=	argv.database||
						process.env.warehouse_database||
						"postgres://test:test123@213.168.251.124/ddw";
	console.log("--database="+argv.database);

// where to store the csv output files
	argv.csvdir		=	argv.cache||
						process.env.warehouse_csvdir||
						"../";
	console.log("--csvdir="+argv.csvdir);

	console.log("")

	return argv;
}



// run once when invoked from command line
cmd.run=function(argv)
{
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
		">	warehouse test \n"+
		"Test settings etc.\n"+
		"\n"+
		"\n"+
	"");

};


// if global.argv is set then we are inside another command so do nothing
// otherwise perform init and then cmd.run
if(!global.argv)
{
	var argv = require('yargs').argv; global.argv=argv;
	cmd.defaults(argv);
	cmd.run(argv);
}
