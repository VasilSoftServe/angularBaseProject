(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todoItem', todoItem);

    function todoItem() {
        var directive = {
            templateUrl: './states/todoItem/todoItem.html',
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
        $scope.vm.editState = false;
        $scope.editItem = editItem;
        $scope.saveItem = saveItem;
        $scope.deleteItem = deleteItem;

        function deleteItem() {
            todos.deleteItem($scope.list, $scope.data.id);
        }

        function editItem() {
            $scope.vm.editState = true;
        }

        function saveItem() {
            $scope.vm.editState = false;
        }
    }
}(angular));