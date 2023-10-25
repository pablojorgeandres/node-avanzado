exports.aguanteHumber = function(req, res) {
	let p = 'Humber';
	let q = 'Aguante ';
	// var s = 'Buuu Humber';
	// for(let s = 0; s < q.length; s++) {
	// 	if(s % 5 === 0) {
	// 		s = q + p;
	// 		break;
	// 	}
	// }

	// El loop y la variable s exceden la responsabilidad del método. Se comentan y se concatena el string en la respuesta.
	res.send(q + p);
}

/*
* No funciona porque ........ 
*/