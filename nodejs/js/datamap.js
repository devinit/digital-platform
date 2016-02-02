
var datamap=exports;

var fs=require("fs");
var util=require("util");
var babyparse=require("babyparse");

var print=console.log;
var ls=function(a) { console.log(util.inspect(a,{depth:null})); }

// read in the concepts.csv 
datamap.concepts=babyparse.parse( fs.readFileSync(argv.csvdir+"concepts.csv").toString() , {header:true}).data;

datamap.raw=require("./datamap_raw").raw;

for(var i in datamap.raw){var v=datamap.raw[i];
	if(v.table&&v.csv) // already got what we need
	{
	}
	else // take a guess from v.dw
	{
/*
		var aa=v.dw.split(".");
		v.schema=aa[0];
		v.name=aa[1];
		v.table=v.schema+".\""+v.name+"\""; // need to add " around table name as it may start with a number
		
		var fn=v.name.split("_").join("-"); // possible filename, check for it in concepts
		
		for(var ic in datamap.concepts){var vc=datamap.concepts[ic];
			if( vc.id && (fn.toLowerCase()==vc.id.toLowerCase() )) // 
			{
				if(vc.series!="reference") // dont map to reference folder, that will stay in DP
				{
					if(v.csv)
					{
						print( "CLASH: " + v.csv + " - " + vc.series+"/"+vc.id+".csv : "+v.dw );
					}
					else
					{
						v.csv=vc.series+"/"+vc.id+".csv";
//						vc.dw=v;
//						v.dp=vc;
					}
				}
			}
		}
*/
	}
}

datamap.csv={}
for(var i in datamap.raw){var v=datamap.raw[i];
	if(v.csv&&v.table)
	{
		datamap.csv[ v.csv ]=v.table;
	}
}


datamap.summary=function()
{
	var find_csv=function(n){
		for(var i in datamap.raw){var v=datamap.raw[i];
			if(v.csv==n) { return v; }
		}
	}

	print("")
	print("The following DW tables are not going to be used")
	print("")

	for(var i in datamap.raw){var v=datamap.raw[i];
		if( v.schema && v.schema!="reference" ) // ignore reference
		{
			if(!v.csv)
			{
				print( "UNUSED WAREHOUSE TABLE: "+v.dw);
			}
		}
	}

	print("")
	print("The following DP csv files are not going to be replaced with DW data")
	print("")
	for(var ic in datamap.concepts){var vc=datamap.concepts[ic];
		if( vc.series && vc.series!="reference" ) // dont map to reference folder, that will stay in DP
		{
			if(!find_csv( vc.series+"/"+vc.id+".csv" ))
			{
				print( "MISSING FROM WAREHOUSE: "+vc.series+"/"+vc.id);
			}
		}
	}

	print("")
	print("The following DP tables/selects will be exported to these DW csv files")
	print("")
	for(var i in datamap.csv){var v=datamap.csv[i];
		print( i+" <- "+v);
	}

}

