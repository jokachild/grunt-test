/**
 * Created by amyroniuk on 11/8/13.
 */

requirejs.config({

	baseUrl: "js/lib",

	paths: {
		app: "../app"
	},

	shim: {
		"Backbone": {
			deps: ["underscore", "Jquery"],
			exports: "Backbone"
		},

		"underscore": {
			exports: "_"
		}
	}

});

require(["app/Application"], function (Application) {
	(new Application()).init();
});