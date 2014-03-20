/* jslint node: true */
'use strict';

var getAllPropertyNames = module.exports = function( obj ) {
	if (!obj)
		obj = this;

	var names = Object.getOwnPropertyNames(obj);
	var prototype;

	if ((prototype = Object.getPrototypeOf(obj)))
		getAllPropertyNames(prototype).forEach(function( name ){
			if (!~names.indexOf(name))
				names.push(name);
		});

	return names;
};