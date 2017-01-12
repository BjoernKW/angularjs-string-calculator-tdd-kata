'use strict';

angular.module('myApp.stringCalculator', [])

.factory('stringCalculator', stringCalculator);

function stringCalculator() {
	return {
		add: function(numbers) {
            if (!numbers || numbers === '') {
                return 0;
            }

            var integerValues = numbers.split(/[,\n]/).map(function (value) {
				return parseInt(value);
            });

            if (integerValues.length < 2) {
            	return integerValues[0];
			}

			return integerValues.reduce(function (a, b) {
				return a + b;
            });
		}
	};
}
