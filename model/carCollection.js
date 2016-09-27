define(
	['jquery', 'lodash', 'backbone', '../model/car'],

function($, _, Backbone, Car) {
	window.CarCollection = Backbone.Collection.extend({
	    model: Car,
	    url: "cars.json"
	});
	return CarCollection;
});
