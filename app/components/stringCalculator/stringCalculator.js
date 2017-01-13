'use strict';

angular.module('myApp.stringCalculator', [])

.factory('stringCalculator', stringCalculator);

function stringCalculator() {
    function escapeRegExp(regExpString) {
        regExpString = regExpString.replace(/[\-\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        return regExpString.replace('][', '|').replace(/\[|\]/g, '');
    }

    function extractIntegerValues(input) {
        var numbers = input;
        var delimiter = /[,\n]/;
        if (input.startsWith('//')) {
            delimiter = new RegExp(escapeRegExp(input.split('\n').shift().substr(2)));
            numbers = input.replace(/^\/\/.+\n/, '');
        }

        var invalidValues = [];
        var integerValues = numbers.split(delimiter).map(function (value) {
            var integerValue = parseInt(value);
            if (integerValue < 0) {
                invalidValues.push(integerValue);
            }
            if (integerValue > 1000) {
                return 0;
            }
            return integerValue;
        });

        if (invalidValues.length > 0) {
            throw new Error('No negative values are allowed: ' + invalidValues.join(', '));
        }

        return integerValues;
    }

	return {
		add: function(input) {
            if (!input || input === '') {
                return 0;
            }

            var integerValues = extractIntegerValues(input);

            if (integerValues.length < 2) {
            	return integerValues[0];
			}

			return integerValues.reduce(function (a, b) {
				return a + b;
            });
		}
	};
}
