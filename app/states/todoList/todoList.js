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
                data: '=',
                list: '='
            }
        };
        return directive;
    }

    controller.$inject = ['$scope', 'todos'];
    function controller($scope, todos) {        

        $scope.vm = {};
        $scope.todos = todos;
        $scope.vm.editMode = false;
        $scope.addNewItem = addNewItem;
        $scope.listAllItems = listAllItems;

        $scope.editTodo = editTodo;        
        $scope.saveTodo = saveTodo;

        $scope.deleteTodo = deleteTodo;
        
        function addNewItem() {
            todos.addItem($scope.data.id, $scope.vm.name);
            $scope.vm.name = '';
        }

        function listAllItems() {          
            return $scope.data.todos;
        }

        function editTodo() {
            $scope.vm.editMode = true;
        }

        function saveTodo() {
            $scope.vm.editMode = false;
        }

        function deleteTodo(){
            todos.deleteTodo($scope.list, $scope.data.id);
        }

    }
}(angular));