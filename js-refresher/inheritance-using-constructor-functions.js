const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
}
Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} is going at ${this.speed} km/h`);
}
Car.prototype.brake = function () {
	this.speed -= 5;
	console.log("breaking==========>");
	console.log("this is ");
	console.log(this);
	console.log(`${this.make} is going at ${this.speed} km/h`);
	console.log("<===========");
}

const EV = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
	console.log("ev created");
	console.log("the charge is ");
	console.log(this.charge)
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge -= Math.floor(this.charge/100);
}

const tesla = new EV('tesla', 200, 100);
tesla.accelerate();
tesla.accelerate(20);
tesla.brake();
console.log(`tesla is instance of EV and Car respectively \n${tesla instanceof EV}\n ${tesla instanceof Car}`);
