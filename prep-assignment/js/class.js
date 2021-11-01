class Costs {

	JSONFILE = './json/costs.json';
	material = ''
	price = 0
	detail = 0
	speed = 0
	damageCosts = 0 
	
	getJsonObject() {
		let data = $.getJSON(this.JSONFILE);
		$.getJSON()
		console.log(data);
		return ;
	}

	getMaterial(material) {

		$.getJSON(this.JSONFILE, { name: material } ).done(function( json ) {

			const data = json;



		}).fail(function( jqxhr, textStatus, error ) {

			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );

		});

	}

}