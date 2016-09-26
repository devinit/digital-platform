
var datamap=exports;

var fs=require("fs");
var util=require("util");
var babyparse=require("babyparse");

var print=console.log;
var ls=function(a) { console.log(util.inspect(a,{depth:null})); }

// read in the concepts.csv 
datamap.concepts=babyparse.parse( fs.readFileSync(argv.csvdir+"concepts.csv").toString() , {header:true}).data;

datamap.csv=require("./datamap_raw").csv;

datamap.summary=function()
{
	var out={};
	
	for(var csv_name in datamap.csv){ var csv_sql=datamap.csv[csv_name];
		
		var it={};		
		out[csv_name]=it		
		it.sql=csv_sql;

		var csv_header=fs.readFileSync(argv.csvdir+csv_name).toString();
		var csv_size=csv_header.length;
		csv_header=csv_header.split("\n")[0];
		csv_header=csv_header.split(",");


		it.csv_header=csv_header;
		it.csv_size=csv_size;
	}

	console.log(
		JSON.stringify(out,null,"\t")
	);

}

