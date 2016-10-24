
var datamap=exports;

var fs=require("fs");
var util=require("util");
var babyparse=require("babyparse");
var json_stringify = require('json-stable-stringify')

var print=console.log;
var ls=function(a) { console.log(util.inspect(a,{depth:null})); }

// read in the concepts.csv 
datamap.concepts=babyparse.parse( fs.readFileSync(argv.csvdir+"concepts.csv").toString() , {header:true}).data;

datamap.csv=require("./datamap_raw").csv;

datamap.summary=function()
{
	var out={};
	
	out.csv={}
	
	for(var csv_name in datamap.csv){ var csv_sql=datamap.csv[csv_name];
		
		var it={};		
		out.csv[csv_name]=it		
		it.sql=csv_sql;

		var csv_header=fs.readFileSync(argv.csvdir+csv_name).toString();
		var csv_size=csv_header.length;
		csv_header=csv_header.split("\n")[0];
		csv_header=csv_header.split(",");


		it.csv_header=csv_header;
		it.csv_size=csv_size;
	}

// list all oda ids mapped to entity so we can see missing junk
	out.oda_ids={}

	var csv_entity=babyparse.parse( fs.readFileSync(argv.csvdir+"reference/entity.csv").toString() , {header:true} ).data;
	var csv_entity_lookup={}
	for( var i in csv_entity ) { var v=csv_entity[i];
		csv_entity_lookup[ v.id ] = v;
	}

	var map_ids={}
	for(var csv_name in datamap.csv){ var csv_sql=datamap.csv[csv_name];

		if( csv_name.startsWith("country-year/oda") )
		{
			var csv_oda=babyparse.parse( fs.readFileSync(argv.csvdir+csv_name).toString() , {header:true} ).data;
			for( var i in csv_oda ) { var v=csv_oda[i];
				
				map_ids[ v["id-from"] ]= true ;
				map_ids[ v["id-to"]   ]= true ;
				
			}
		}

	}

	for( var id in map_ids ) {
		out.oda_ids[id] = csv_entity_lookup[id] && csv_entity_lookup[id].name || "***MISSING***" ;
	}

	console.log(
		json_stringify(out,{ space: '  ' })
	);

}

