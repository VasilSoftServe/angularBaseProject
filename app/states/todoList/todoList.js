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
       
        function data() {
            return console.log('list: ' +  $scope.data);
        }
        // console.log(todos);
        // $scope.listTodo = listTodo;
        // $scope.showTodoList = showTodoList;           
    }
}(angular));