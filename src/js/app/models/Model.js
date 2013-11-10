/**
 * Created by Andrey Myroniuk on 23.10.13.
 */

define([
    "underscore",
    "Backbone"
], function (_, Backbone) {

    return Backbone.Model.extend({

        defaults: {
            version: "0.0.1"
        },

        initialize: function () {
            console.log("Model initialized...");
        },

        getVersion: function () {
            return this.get("version");
        }

    });
});