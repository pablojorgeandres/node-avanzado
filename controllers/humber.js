exports.aguanteHumber = function(req, res) {
	let p = 'Humber';
	let q = 'Aguante ';
	var s = 'Buuu Humber';
	for(let s = 0; s < q.length; s++) {
		if(s % 5 === 0) {
			s = q + p;
			break;
		}
	}

	res.send(s);
}

/*
* No funciona porque ........ 
*/