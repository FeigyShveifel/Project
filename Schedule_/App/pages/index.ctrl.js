(function () {
    'use strict';

    angular
        .module('SlApp')
        .controller('indexctrl', indexctrl);

    indexctrl.$inject = ['$location','$scope'];

    function indexctrl($location,$scope ) {
        /* jshint validthis:true */

        var vm = this;
        vm.title = 'index';
        $scope.Route = function (name) {
            $location.path(name);
        };
        activate();

        function activate() {
        }
    }
})();
