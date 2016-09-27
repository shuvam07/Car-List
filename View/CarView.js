define(
	['jquery', 'lodash', 'backbone', '../util/tpl'],

function($, _, Backbone, tpl) {
	window.CarView = Backbone.View.extend({
	    initialize: function() {
	    	this.template =	_.template(tpl.get('tpl-car-details'));
	    },

	    render: function () {
	        $(this.el).html(this.template(this.model.toJSON()));
	        return this;
	    }
	});
	return CarView;
});