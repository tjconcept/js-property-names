/* jslint node: true */
'use strict';

var propertyNames = require('./');
var intersect = require('intersect');
var test = require('tap').test;

test('property-names', function( t ) {
	t.plan(1);

	var Thing = function(){};
	Thing.prototype.describe = function(){};

	var Vehicle = function(){};
	Vehicle.prototype = Object.create(Thing.prototype);
	Vehicle.prototype.drive = function(){};
	Vehicle.prototype.describe = function(){};

	var Car = function( brand ){ this.brand = brand; };
	Car.prototype = Object.create(Vehicle.prototype);

	t.deepEqual(intersect(propertyNames(new Car), [ 'brand', 'drive', 'describe' ]), [ 'brand', 'drive', 'describe' ]);
});