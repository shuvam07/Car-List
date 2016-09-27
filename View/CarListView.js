define(
    ['jquery', 'lodash', 'backbone','../model/car', '../view/CarListItemView'],

function($, _, Backbone, Car, CarListItemView) {

    window.CarListView = Backbone.View.extend({

        tagName:'ul',

        initialize:function () {
            this.model.bind('reset', this.render, this);

        },

        render:function (eventName) {
            _.each(this.model.models, function (car) {
                $(this.el).append(new CarListItemView({model:car}).render().el);
            }, this);
            return this;
        }

    });

    return CarListView;
});
