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

            it('#add should return single integers', function() {
                expect(stringCalculator.add('1')).toBe(1);
                expect(stringCalculator.add('2')).toBe(2);
            });

            it('#add should return sums of two integers', function() {
                expect(stringCalculator.add('1,2')).toBe(3);
                expect(stringCalculator.add('2,4')).toBe(6);
            });

            it('#add should return sums of an arbitary number of integers', function() {
                expect(stringCalculator.add('1,2,3,4')).toBe(10);
            });
        })
    });
});
