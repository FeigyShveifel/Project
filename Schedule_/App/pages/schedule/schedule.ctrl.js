(function () {
    'use strict';

    angular
        .module('SlApp.schedule')
        .controller('schedulectrl', schedulectrl);

    schedulectrl.$inject = ['$scope'];

    function schedulectrl($scope) {
        $scope.month = true;
        /* jshint validthis:true */
        var vmschedule = this;
        vmschedule.title = 'schedule';
        $scope.Arr = [];
        $scope.txt = "";
        $scope.TableLoadMonth = function () {
            $scope.show = true;
            $scope.sum = 0;
            $scope.Arr = [];
            for (var i = 1; i <= localStorage.length; i++) {
                var text = localStorage[i];
                var p = JSON.parse(text);
                var m = new Date(p.date).getMonth() + 1;
                if (m.toString() == $scope.txt || $scope.txt == "")
                    $scope.Arr.push({ date: p.date, time: p.time, status: p.status, sumhour: p.sumhour });
            }
            for (var i = 1, j = 0; i <= localStorage.length - 1; i += 2, j++) {
                var text = localStorage[i];
                var p = JSON.parse(text);
            }

            $scope.month = false;
        }

    }
})();
