$(document).ready(() => {

	const Calculate = new Costs();
	Calculate.getJsonObject();

	registerClick = (id) => {

		let arr = id.split("-");
		
		switch (arr[0]) {

			case 'material':
				
				Calculate.getMaterial(arr[1]);

			break;

			case 'detail':
				
			break;

			case 'speed':
				
			break;

		}

	}

});