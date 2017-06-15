(function () {
    'use strict';

    var app = angular.module('loginApp');
    app.controller('LoginController',LoginController );
    LoginController.$inject = ['$location', '$scope'];
    function LoginController ($location,$scope) {
        $scope.user = { name: "", password: "" };
        $scope.login = function () {
            $scope.user.isSuccess = false;
            if ($scope.user.name == $scope.user.password) {
                $scope.user.isSuccess = true;
                if ($scope.user.isSuccess) {
                    $scope.spSuccess = "משתמש נכנס בהצלחה";
                    $location.path('\index');
                }

            }
            else {
                $scope.spSuccess = "משתמש שגוי"
            }

        };
    }

    var Hello = React.createClass({
        propTypes: {
            name: React.PropTypes.string.isRequired,
            password: React.PropTypes.string.isRequired
        },
 render: function () {
            return React.DOM.span(null, 'Hello ' + this.props.name );
        }
    });

    app.value("Hello", Hello);

    app.directive('hello', function (reactDirective) {
        return reactDirective(Hello);
    });
})();