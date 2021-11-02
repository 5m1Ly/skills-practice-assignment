const Bill = require('./api');

let newBill = Bill.calc('kopper', 'medium', 100, true);

console.log(newBill);