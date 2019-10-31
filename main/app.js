function distance(first, second){
	//TODO: implementați funcția
	// TODO: implement the function
	
	if(!(first instanceof Array) || !(second instanceof Array))
	{
		throw new Error("InvalidType");
	}
	
	var f = first.reduce(function(a,b){
		if(a.indexOf(b)<0)a.push(b);
		return a;
	},[]);
	
	var s = second.reduce(function(c,d){
		if(c.indexOf(d)<0)c.push(d);
		return c;
	},[]);
	
	var c1 = Object.keys(f).length;
	var c2 = Object.keys(s).length;

	if(c1>c2)
		return c1-c2;
	else
		if(c1<c2)
			return c2-c1;
		else
			if(c1==0 && c2==0)
				return 0;
}

module.exports.distance = distance