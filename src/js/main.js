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
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},

		"underscore": {
			exports: "_"
		},

        "bootstrap": {
            deps: ["jquery"]
        }
	}

});

require(["app/Application", "bootstrap"], function (Application) {
	(new Application()).init();
});