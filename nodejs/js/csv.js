
// yeah... so we need a simpler csv exporter that uses less memory

var csv=exports;

// default global settings, just override if you need to

csv.str_quote="\"";
csv.str_escapequote="\"\"";
csv.str_delimiter=",";
csv.str_linebreak="\n";

var print=console.log;
var ls=function(a) { print(util.inspect(a,{depth:null})); }

// turn a single line array of values into an escaped csv style string with terminating line break
csv.array_to_line=function(a)
{
	var r=[];

    for(var i=0;i<a.length;i++){ var v=a[i];

		// simple convert to string if necessary
		if(typeof v === 'string')  {}              else
		if(typeof v === 'boolean') { v=v?"1":""; } else
		if(typeof v === 'number')  { v=""+v; }     else { v=""; }

		var got_delimiter	=	v.indexOf(csv.str_delimiter	)>=0;
		var got_quote		=	v.indexOf(csv.str_quote		)>=0;
		var got_linebreak	=	(v.indexOf("\r")>=0)||(v.indexOf("\n")>=0);

		if(got_quote) // escape quotes
		{
			var rx=new RegExp(csv.str_quote,'g');
			v = v.replace(rx,csv.str_escapequote);
		}
		if(got_delimiter || got_quote || got_linebreak) // wrap in quotes
		{
			v=csv.str_quote+v+csv.str_quote;
		}
		
		r.push(v);
	}

	return r.join(csv.str_delimiter)+csv.str_linebreak;
};

// turn an array of arrays into a full csv style file string
csv.arrays_to_lines=function(a)
{
	var r=[];
    for(var i=0;i<a.length;i++){ var v=a[i];
		r.push( csv.array_to_line(v) );
	}
	return r.join("");
};

