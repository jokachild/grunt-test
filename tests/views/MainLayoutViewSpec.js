define(["jquery", "Backbone", "app/views/MainLayoutView"], function ($, Backbone, MainLayoutView) {

    describe("MainLayoutView", function () {

        it("should exist", function () {
            expect(MainLayoutView).not.toBeNull(true);
        });

        /*it("should exist", function () {
            $("body").append("<div class='main'></div>");
            var view = new MainLayoutView({
                model: new Backbone.Model({
                    version: "0.0.3"
                })
            });
            view.render();
            expect(view.$el.find("p").first().text()).toEqual("Version: 0.0.3");
        });*/

    });

});