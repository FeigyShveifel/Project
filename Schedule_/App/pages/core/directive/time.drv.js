
angular.module('SlApp').directive('timeDrv', function ($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'clock/time.tmpl.html',

        scope: {
            message: '@',
            timetype: '=',
            timefunction: '&'
        },
        link: function (scope, element, attribute) {
            scope.timetype = new Date();
        }
    }
});
