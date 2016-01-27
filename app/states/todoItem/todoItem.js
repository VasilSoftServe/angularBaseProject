(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todoItem', todoItem);

    function todoItem() {
        var directive = {
            templateUrl: './states/todoItem/todoItem.html',
            restrict: 'E',
            controller: controller,
            scope: {
                data: '='
            }
        };
        return directive;
    }    

    controller.$inject = ['$scope', 'todos'];
    function controller($scope, todos) {        

        $scope.vm = {};
        $scope.todos = todos;   
           
    }
    
}(angular));