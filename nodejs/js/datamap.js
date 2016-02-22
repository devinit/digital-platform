
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
	print("")
	print("The following DP tables/selects will be exported to these DW csv files")
	print("")
	for(var csv_name in datamap.csv){ var csv_sql=datamap.csv[csv_name];
		print( csv_name+" <- "+csv_sql);
	}

}

