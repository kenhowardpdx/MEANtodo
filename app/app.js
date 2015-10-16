angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<h1>Home</h1>'
    })
    .when('/about', {
        controller: 'AboutController',
        controllerAs: 'vm',
        template: '<h1>{{vm.headline}}</h1><p>{{vm.body}}</p>'
    })
    .otherwise('/');
}]);