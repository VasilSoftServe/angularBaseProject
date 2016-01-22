(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service); 
 
    var id =1,
        listTodos = [],
        todos = [];
        
    service.$inject = ['$http'];
    function service($http) {       
        return {
            getTodoList: listTodos,
            addList: addListTodos
        };

    function addListTodos (name) {
            if (isDuplicate(name)) {
                alert('The list existed!');
            }else{
                var todo = {
                    id: id, 
                    name: name, 
                    todos: todos
                };

                listTodos.push(todo);
                    alert('The list is create from first time!');
                    id++;
            }
        }

    function isDuplicate(name){
          return _.some(listTodos, function (todo) {
               return todo.name === name;
           });
        }       
    }    
})(angular);