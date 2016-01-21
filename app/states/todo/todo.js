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
                template: '<todo name="\'Vas\'"></todo>'
            });
    }

    var id =1;

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

    controller.$inject = ['$scope', 'todos'];
    function controller($scope, todos) {
        $scope.todos = todos;
        function list() {
            alert('! Give me ' + todos.getTodoList() + '!');
        }
    }
}(angular));