var angular = require('angular');

// Load controllers.

angular.module('app').controller('AboutController', require('./about/about.controller'));
angular.module('app').controller('TodosController', require('./todos/todos.controller'));