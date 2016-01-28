(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service); 

    var minLenghtOfListName = 3;
    var idTodos = 1,
        idItem = 1,
        listTodos = []; 

    service.$inject = ['$http'];
    function service($http) {       
        return {
            listTodos: listTodos,
            addList: addListTodos,
            addItem: addItem
            //deteleItem: deteleItem
        };

    // Add todo list
    function addListTodos (name) {
            // if (_.size(name) <= minLenghtOfListName ){
            //     return console.log('This list has too short name!!!');                
            // }

            if (isDuplicate(name)) {
                console.log('The list existed!');
            } else {

                if (listTodos.length > 0) {
                    var last = _.last(listTodos);
                    idTodos = last.id + 1;
                }

                var todo = {
                    id: idTodos, 
                    name: name, 
                    todos: []
                };

                listTodos.push(todo);                
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
    function addItem(itemId, name) {
        var itemList = _.find(listTodos, function(items) {
            return items.id === itemId; 
        });
        if (isDuplicatedItem(itemList, name)) {
                console.log('The item existed!');
            } else {
                
                if (itemList && itemList.todos.length > 0) {
                    var lastItem = _.last(itemList.todos);
                    idItem = lastItem.id + 1;
                }

                var item = {
                    id: idItem, 
                    name: name
                };

                itemList.todos.push(item);                
                console.log('The item is create from the first time!');                
            }
    }

    // Check if item is duplicated
    function isDuplicatedItem(itemList, name) { 
        return _.some(itemList.todos, function(item) { 
            return item.name === name;
        });
    }

    // Delete item by id 
    function deleteItem(itemList, itemId) {
        var index = _.findIndex(itemList, function(item) { 
                return item.id === itemId; 
            });
        
            itemList.splice(index, 1);
    }
})(angular);