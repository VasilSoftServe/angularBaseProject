(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todo', todo)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('todo', {
                url: '/todo',
                template: '<todo></todo>'
            });
    }

    function todo() {
        var directive = {
            templateUrl: './states/todo/todo.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };
        return directive;
    }    

    controller.$inject = ['$scope', 'todos', 'prompt'];
    function controller($scope, todos, prompt) {        

        $scope.vm = {};
        $scope.todos = todos;
        $scope.addNewTodoList = addNewTodoList;
        $scope.listAllTodoLists = listAllTodoLists;

        function addNewTodoList() {
           // todos.addList($scope.vm.name);
           //  $scope.vm.name = '';
              //ask the user for a string
            prompt({
                title: 'Give me a name',
                message: 'What would you like to name it?',
                input: true,
                label: 'Name',
                value: ''
            }).then(function(name) {
            //the promise is resolved with the user input
            todos.addList(name);
            // $scope.vm.name = '';
            // console.log('and the name is ', name);
            }); 
        }

        function listAllTodoLists(){
            return todos.listTodos;
        }        
    }
}(angular));