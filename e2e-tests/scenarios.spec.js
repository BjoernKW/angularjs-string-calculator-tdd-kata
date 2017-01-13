'use strict';

describe('my app', function () {
    var View1 = require("./view1.pageObject");

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/view1");
    });

    describe('view1', function () {
        var page = new View1();

        beforeEach(function () {
            page.navigateTo();
        });

        it('should display message saying "String Calculator"', function () {
            expect(page.getParagraphText()).toEqual('String Calculator');
        });

        it('should calculate a sum', function () {
            page.setInput('1,1000,3,4,1001');
            page.submitForm();
            expect(page.getResultText()).toEqual('1008');
        });

        it('should render view1 when user navigates to /view1', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/partial for view 1/);
        });
    });


    describe('view2', function () {
        beforeEach(function () {
            browser.get('index.html#!/view2');
        });

        it('should render view2 when user navigates to /view2', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/partial for view 2/);
        });
    });
});
