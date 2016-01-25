(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service); 

    var minLenghtOfListName = 3;
    var id = 1,
        listTodos = [],
        todos = []; 

    service.$inject = ['$http'];
    function service($http) {       
        return {
            listTodos: listTodos,
            addList: addListTodos,
            editTodoList: editTodoList
        };

    function addListTodos (name) {
            if (_.size(name) <= minLenghtOfListName ){
                return console.log('This list has too short name!!!');                
            }

            if (isDuplicate(name)) {
                console.log('The list existed!');
            } else {

                if (listTodos.length > 0) {
                    var last = _.last(listTodos);
                    id = last.id + 1;
                };

                var todo = {
                    id: id, 
                    name: name, 
                    todos: todos
                };

                listTodos.push(todo);                
                console.log('The list is create from the first time!');                
            }
        }

    function isDuplicate(name) {
          return _.some(listTodos, function (todo) {
               return todo.name === name;
           });
        }       
    }   

    function editTodoList() {
        return 
    }
})(angular);