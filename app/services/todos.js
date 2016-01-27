(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service); 

    var minLenghtOfListName = 3;
    var idTodos = 1,
        idItem = 1,
        listTodos = [],
        todos = []; 

    service.$inject = ['$http'];
    function service($http) {       
        return {
            listTodos: listTodos,
            addList: addListTodos,
            addItem: addItem,
            getItems: getItems
        };

    // Add todo list
    function addListTodos (name) {
            if (_.size(name) <= minLenghtOfListName ){
                return console.log('This list has too short name!!!');                
            }

            if (isDuplicate(name)) {
                console.log('The list existed!');
            } else {

                if (listTodos.length > 0) {
                    var last = _.last(listTodos);
                    idTodos = last.id + 1;
                }

                var todoList = {
                    id: idTodos, 
                    name: name, 
                    todos: todos
                };

                listTodos.push(todoList);                
                console.log('The list is create from the first time!');                
            }
        }

    // Check if todo list is duplicated
    function isDuplicate(name) {
          return _.some(listTodos, function (todo) {
               return todo.name === name;
           });
        }
    }

    // Add item list
    function addItem(idItem, name){
        var itemList = _.find(listTodos, function(item) {
            return item.id === idItem; 
        });
        if (isDuplicatedItem(itemList, name)) {
                console.log('The item existed!');
            } else {
                
                if (itemList && itemList.todos.length > 0) {
                    var lastItem = _.last(itemList.todos);
                    idItem = lastItem.id + 1;
                }

                var todo = {
                    id: idItem, 
                    name: name
                };

                itemList.todos.push(todo);                
                console.log('The item is create from the first time!');                
            }
    }


    function getItems(idItem){
        var itemList = _.find(listTodos, function(item) {
            return item.id === idItem; 
        });
        return itemList.todos;
    }

    // Check if item is duplicated
    function isDuplicatedItem(itemList, itemName) { 
        return _.some(itemList.todos, function(item) { 
            return item.name === itemName; 
        });
    }
})(angular);