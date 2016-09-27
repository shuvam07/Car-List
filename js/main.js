require([
    'jquery',
    'lodash',
    'backbone',
    '../view/CarView',
    '../view/CarListView',
    '../util/tpl',
    '../model/CarCollection'
],

function($,_,Backbone,CarView,CarListView, tpl, CarCollection) {
    var AppRouter = Backbone.Router.extend({

        initialize: function(){
        },

        routes:{
            "":"list",
            "cars/:id":"carDetails"
        },

        list: function () {
            this.CarList = new CarCollection();
            this.CarListView = new CarListView({model:this.CarList});
            this.CarList.fetch();
            $('#sidebar').html(this.CarListView.render().el);
        },

        carDetails: function (id) {
                this.Car = this.CarList.get(id);
                this.CarView = new CarView({model:this.Car});
                $('#content').html(this.CarView.render().el);
        },
    });

    tpl.loadTemplates(['header', 'tpl-car-details', 'tpl-car-list-item'], function() {
        var app = new AppRouter();
        Backbone.history.start();
    });
});