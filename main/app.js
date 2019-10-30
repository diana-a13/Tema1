function distance(first, second){
	//TODO: implementați funcția
	// TODO: implement the function

	var c1 = Object.keys(first).length;
	var c2 = Object.keys(second).length;

	if(!(first instanceof Array) || !(second instanceof Array))
		{
			throw new Error("InvalidType");
		}
		
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