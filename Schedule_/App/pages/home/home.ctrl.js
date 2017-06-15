(function () {
    'use strict';

  var app=  angular
        .module('SlApp.home')
        .controller('homectrl', homectrl);

    homectrl.$inject = ['$scope', '$location'];

    function homectrl($scope, $location) {

        $scope.title = 'home';
        $scope.isEnter = false;
        $scope.Enter = false;
        $scope.worker = {sumh:'0'};
        $scope.SaveEnter = function (entertime) {

            if ($scope.Exit == false) {
                localStorage.setItem(localStorage.length + 1, JSON.stringify({ date: new Date(), time: entertime, status: 'Enter' }));
                $scope.start = new Date(entertime);
                $scope.isEnter = false;
                $scope.Exit = false;
                $scope.Enter = true;

            }
            else {
               
                if (new Date(entertime).getHours() - $scope.start.getHours()<0)
                    alert("enter correct time");
                else {
                    $scope.worker.sumh = new Date(entertime).getHours() - $scope.start.getHours();
                    localStorage.setItem(localStorage.length + 1, JSON.stringify({ date: new Date(), time: entertime, status: 'Exit', sumhour: $scope.worker.sumh }));
                    $scope.isEnter = false;
                    $scope.Exit = false;
                    $scope.Enter = false;
                }

            }
            $scope.show = !$scope.show;
        };



    }
    var Hello = React.createClass({
        propTypes: {
            sumh: React.PropTypes.string.isRequired,
        },
 render: function () {
     return React.DOM.span(null, ' today you worked ' + this.props.sumh+ ' ' + 'hours');
        }
    });

    app.value("Hello", Hello);

    app.directive('hello', function (reactDirective) {
        return reactDirective(Hello);
    });
})();
