(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service); 

    var minLenghtOfListName =3;
    var id =1,
        listTodos = [],
        todos = [];     

    service.$inject = ['$http'];
    function service($http) {       
        return {
            getTodoList: listTodos,
            addList: addListTodos,
            getListOfTodos: showTodoList
        };

    function addListTodos (name) {
            if (_.size(name) <= minLenghtOfListName ){
                return console.log('This list has too short name!!!');                
            }

            if (isDuplicate(name)) {
                console.log('The list existed!');
            }else{
                var todo = {
                    id: id, 
                    name: name, 
                    todos: todos
                };

                listTodos.push(todo);
                id++;
                console.log('The list is create from the first time!');                
            }
        }

    function isDuplicate(name){
          return _.some(listTodos, function (todo) {
               return todo.name === name;
           });
        }       
    }
    
    function showTodoList (){
        var output = '';
        for (print in listTodos){
            output += print.name + ': ' + print.todos + ', ';
        }
        return output;
    }    
})(angular);