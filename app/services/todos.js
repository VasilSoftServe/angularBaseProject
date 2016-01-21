(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service);

    service.$inject = ['$http'];
 
    var id =1

    var todos = {
        id:id,
        name: name,
        addList: []
    }

    function service($http) {
       
        return {
            getTodoList: listTodos
        };

        function isDuplicate(name){
           _.some(todos, function () {
               return todos.name = name;
           })
        }

        function listTodos() {
            isDuplicate();
            return todos.name;
        }
    }
    
}(angular));