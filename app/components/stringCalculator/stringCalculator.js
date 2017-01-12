'use strict';

angular.module('myApp.stringCalculator', [])

.factory('stringCalculator', stringCalculator);

function stringCalculator() {
	return {
		add: function(numbers) {
			return 0;
		}
	};
}
