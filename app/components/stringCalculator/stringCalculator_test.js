'use strict';

describe('myApp.stringCalculator module', function() {
    var stringCalculator;

    beforeEach(module('myApp.stringCalculator'));
    beforeEach(inject(function(_stringCalculator_) {
        stringCalculator = _stringCalculator_;
    }));

    describe('myApp.stringCalculator service', function() {
        describe('Basic functionality', function() {
            it('#add should return 0 on empty string', function() {
                expect(stringCalculator.add('')).toBe(0);
        	});
        })
    });
});
