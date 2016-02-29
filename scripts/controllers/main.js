'use strict';

// Don't pass in second parameter to angular.module
// because we don't want to create a new module
angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {

	$scope.addTodo = function() {
		var todo = {name: "This is a new todo."}
		//$scope.todos.push(todo);
		$scope.todos.unshift(todo);
		// use unshift to move todos to the beginning of the array
	}

	$scope.todos = dataService.getTodos();

	dataService.getTodos(function(response) {
		console.log(response.data);
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo, $index) {
		dataService.deleteTodo(todo);
		// Use splice to remove from array
		$scope.todos.splice($index, 1);
	}

	$scope.saveTodos = function(todo) {
		// $scope.todos is an array of objects
		// Loop through each todo
		var filteredTodos = $scope.todos.filter(function(todo) {
			if(todo.edited) {
				return todo;
			}
		});
		dataService.saveTodos(filteredTodos);
	}

})