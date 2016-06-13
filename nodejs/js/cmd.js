
var cmd=exports;

var fs = require('fs');
var util=require('util');
var path=require('path');

var print=console.log;
var ls=function(a) { console.log(util.inspect(a,{depth:null})); }


// set defaults if unset
// settings come from commandline then environemnt then defaults
// environment variables have a warehouse_ prefix

cmd.defaults=function(argv)
{

// display verbose data
	argv.verbose	=	argv.verbose||
						process.env.warehouse_verbose||
						0;

// how/where to connect to postgres
	argv.database	=	argv.database||
						process.env.warehouse_database||
						"postgres://readonly:test123@213.168.251.124:5433/ddw";

// where to store the csv output files
	argv.csvdir		=	argv.cache||
						process.env.warehouse_csvdir||
						"../";

	if(argv.verbose){
		console.log("");
		console.log("--verbose="+	argv.verbose	);
		console.log("--database="+	argv.database	);
		console.log("--csvdir="+	argv.csvdir		);
		console.log("");
	}

	return argv;
}



// run once when invoked from command line
cmd.run=function(argv)
{
	if( argv._[0]=="import" )
	{
		return require("./db").import(argv._[1]);
	}
	else
	if( argv._[0]=="summary" )
	{
		return require("./datamap").summary();
	}
	else
	if( argv._[0]=="test" )
	{
		return require("./db").test();
	}

	// help text
	console.log(
		"\n"+
		">	warehouse import \n"+
		"Import all warehouse data into local CSV files.\n"+
		"\n"+
		">	warehouse summary \n"+
		"Display a summary of how we map data between the DW and DP and what is probably missing.\n"+
		"\n"+
		">	warehouse test \n"+
		"Test settings etc.\n"+
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
