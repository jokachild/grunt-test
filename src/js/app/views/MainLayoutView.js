/**
 * Created by amyroniuk on 11/8/13.
 */

define([
    "jquery",
    "underscore",
    "Backbone",
    "text!app/templates/layout/main-layout.html"
], function ($, _, Backbone, MainLayoutTemplate) {

    var MainLayoutTemplateCompiled = _.template(MainLayoutTemplate);

    return Backbone.View.extend({

        el: $(".main"),

        initialize: function (options) {
            this.model = options.model;
            console.log("MainLayoutView initialized..");
        },

        render: function () {
            this.$el.html(MainLayoutTemplateCompiled({
                version: this.model.get("version")
            }));
        }

    });

});