var angular = require('angular'),
    ngRoute = require('angular-route');
    
angular.module('app', ['ngRoute']);

require('./controllers');
require('./directives');

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'TodosController',
        controllerAs: 'vm',
        templateUrl: 'todos/todos.html',
        resolve: require('./todos/todos.controller').resolve()
    })
    .when('/about', {
        controller: 'AboutController',
        controllerAs: 'vm',
        template: '<h1>{{vm.headline}}</h1><p>{{vm.body}}</p>'
    })
    .otherwise('/');
}]);