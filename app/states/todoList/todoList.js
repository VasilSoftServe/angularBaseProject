(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todoList', todoList);

    function todoList() {
        var directive = {
            templateUrl: './states/todoList/todoList.html',
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
        $scope.addNewItem = addNewItem;
        $scope.listAllItems = listAllItems;
        $scope.hideBtn = true;
        
        function addNewItem() {
            todos.addItem($scope.data.id, $scope.vm.name);
            $scope.vm.name = '';
        }

        function listAllItems() {          
            return $scope.data.todos;
        }

        // function deteleItem() {
        //     return 
        // }
    }
}(angular));