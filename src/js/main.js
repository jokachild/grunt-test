/**
 * Created by amyroniuk on 11/8/13.
 */

requirejs.config({

	baseUrl: "js/",

	paths: {
        jquery: "lib/jquery",
        underscore: "lib/underscore",
        Backbone: "lib/backbone",
        text: "lib/text",
        bootstrap: "lib/bootstrap",
		app: "app/"
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