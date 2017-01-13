'use strict';

angular.module('myApp.stringCalculator.directive', ['myApp.stringCalculator'])

.directive('calculatorForm', [function() {
    return {
        restrict: 'E',
        scope: { },
        controller: ['$scope', 'stringCalculator', function StringCalculatorController($scope, stringCalculator) {
            function add(numbers) {
                return stringCalculator.add(numbers);
            };

            $scope.submit = function() {
                $scope.result = add($scope.numbers);
            };
        }],
        templateUrl: 'components/stringCalculator/stringCalculator.directive.html'
    };
}]);
