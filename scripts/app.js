// Defines our todoList app
// First parameter is name of app
// Second parameter defines dependencies - passing an empty array tells Angular we want to create a new app.
angular.module("todoListApp", []);

// The code commented out below has been moved to other folders within our application.

// Controllers determine the state of the application and have the ability to handle data
// A typical Angular app has multiple controllers for different parts of the application
// First parameter is the name of the controller
// Second parameter is an anonymouse callback function that takes $scope variable
/*.controller('mainCtrl', function($scope, dataService) {

	$scope.addTodo = function() {
		var todo = {name: "This is a new todo."}
		$scope.todos.push(todo);
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

	$scope.saveTodo = function(todo) {
		dataService.saveTodo(todo);
	}

	$scope.saveTodo = function() {
		console.log('Todo has been saved!');
	}

	// Our todo list data
	// An array of objects. Each todo is an object.
	// This has been moved to todos.json
	$scope.todos = [
		{'name': 'Clean the house'},
		{'name': 'Water the dog'},
		{'name': 'Feed the Lawn'},
		{'name': 'Run'},
		{'name': 'Swim'}
	]

})
.service('dataService', function($http) {

	this.getTodos = function(callback) {
		$http.get('mock/todos.json')
		.then(callback);
	}

	this.deleteTodo = function(todo) {
		console.log("The " + todo.name + " todo has been deleted!");
		// other logic
	}

	this.saveTodo = function(todo) {
		console.log("The " + todo.name + " todo has been saved!");
		// other logic
	}

});*/