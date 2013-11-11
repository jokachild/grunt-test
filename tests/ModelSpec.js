define(["app/models/Model"], function (Model) {

    describe("Model", function () {
        var model;

        beforeEach(function () {
            model = new Model();
        });

        afterEach(function () {
            model = null;
        });

        it("should exist", function () {
            expect(Model).not.toBeNull(true);
        });

        it("should have default version '0.0.1'", function () {
            expect(model.getVersion()).toEqual("0.0.1");
        });

        it("should have version '0.0.2'", function () {
            model.set("version", "0.0.2");
            expect(model.getVersion()).toEqual("0.0.2");
        });

    });

});