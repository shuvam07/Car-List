define(
	['jquery', 'lodash', 'backbone', '../util/tpl'],

function($, _, Backbone, tpl) {

	window.CarListItemView = Backbone.View.extend({

	    tagName:"li",
	    
	    events: {
	    	"click": "showDetails"
	    },

	    initialize: function() {
	    	this.template = _.template(tpl.get('tpl-car-list-item'));
	    },

	    render: function () {
	        $(this.el).html(this.template(this.model.toJSON()));
	        return this;
	    },

	    showDetails: function(e){
	    	e.preventDefault();
	    	var id= $(e.target).data("id");
	    	console.log(id);
	    	Backbone.history.navigate("cars/"+id,true);

	    }

	});
	return CarListItemView;
});
