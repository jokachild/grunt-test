/**
 * Created by amyroniuk on 11/8/13.
 */

define(["app/views/MainLayoutView"], function (MainLayoutView) {
	var Application = function () {
		console.log("Application constructor called..");
	};

	Application.prototype.init = function () {
		console.log("Application initialized..");
		var mainView = new MainLayoutView();
		mainView.render();
	};

	return Application;
});