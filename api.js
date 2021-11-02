const data = require('./config/cfg.json');

let calculate = (material, detail, size, speed) => {

	let materialObj = getMaterial(material);
	let machine = getMachine(materialObj, detail);

	let costs = {
		material: materialObj.price,
		detail: getDetailPrice(detail, data.detail),
		speed: 1,
		damage: machine.dmgCost,
		size: size
	}

	if (speed) costs.speed += 0.5;

	let total = calculateCosts(costs);

	return total

}

let getMaterial = (material) => {
	for (let i = 0; i < data.materials.length; i++) {
		const el = data.materials[i];
		if (el.name == material) return el;
	}
}

let getMachine = (material, detail) => {
	for (let i = 0; i < material.machines.length; i++) {
		const machine = material.machines[i];
		for (let j = 0; j < machine.details.length; j++) {
			const selectedDetail = machine.details[j];
			if (selectedDetail == detail) return machine;
		}
	}
}

let getDetailPrice = (detail, costsArray) => {
	for (let i = 0; i < costsArray.length; i++) {
		const el = costsArray[i];
		if (el.name == detail) return el.price;
	}
}

let calculateCosts = (costs) => {

	return ( (costs.material * costs.detail) * costs.speed ) + ( costs.size * costs.damage )

}

exports.calc = calculate;

// let result = calculate('kopper', 'medium', 100, true);

// console.log(result);