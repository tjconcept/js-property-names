# property-names

Get all property names of an object including those in the prototype chain

## installation

	// npm
	$ npm install property-names

## usage

	var getAllPropertyNames = require('property-names');

	var Thing = function(){};
	Thing.prototype.describe = function(){};

	var Vehicle = function(){};
	Vehicle.prototype = Object.create(Thing.prototype);
	Vehicle.prototype.drive = function(){};
	Vehicle.prototype.describe = function(){};

	var Car = function( brand ){ this.brand = brand; };
	Car.prototype = Object.create(Vehicle.prototype);

	getAllPropertyNames(new Car()); // [ 'brand', 'drive', 'describe' ]

## License

MIT