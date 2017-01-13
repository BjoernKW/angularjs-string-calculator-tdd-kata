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
        });

        describe('Variable separators', function() {
            it('#add should work with both new lines and commas as separator', function() {
                expect(stringCalculator.add('1\n2')).toBe(3);
                expect(stringCalculator.add('1,2\n3,4')).toBe(10);
            });

            it('#add should user-defined separators', function() {
                expect(stringCalculator.add('//;\n1;2')).toBe(3);
            });
        });

        describe('Handle invalid input', function() {
            it('#add should throw an exception on negative integers', function() {
                // http://stackoverflow.com/questions/21221697/using-tothrowerror-in-jasmine
                expect(function() { stringCalculator.add('1\n-2') }).toThrowError('No negative values are allowed: -2');
                expect(function() { stringCalculator.add('1,-2\n3,-4') }).toThrowError('No negative values are allowed: -2, -4');
            });

            it('#add should ignore values greater than 1000', function() {
                expect(stringCalculator.add('1,1000,3,4,1001')).toBe(1008);
            });
        });
    });
});
