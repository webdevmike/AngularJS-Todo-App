angular.module('todoListApp')
.directive('todos', function() {
	return {
		templateUrl: 'templates/todos.html',
		replace: true
		// replace: true will get rid of the <todo> tags
		// We could apply the controller here using
		// controller: 'mainCtrl'
	}
});