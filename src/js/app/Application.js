/**
 * Created by amyroniuk on 11/8/13.
 */

define([
    "app/models/Model",
    "app/views/MainLayoutView"
], function (Model, MainLayoutView) {
    var Application = function () {
        console.log("Application constructor called..");
    };

    Application.prototype.init = function () {
        console.log("Application initialized..");
        var model = new Model();
        var mainView = new MainLayoutView({
            model: model
        });
        mainView.render();
    };

    return Application;
});