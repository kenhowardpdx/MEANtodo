require('./todos.html');

TodosController.$inject = ['tasks'];
function TodosController(tasks) {
    var _this = this;
    
    _this.tasks = tasks;
    
    _this.removeTask = function(index) {
        _this.tasks.splice(index, 1);
    }
    
    _this.addTask = function() {
        _this.tasks.push({ isNew: true });
    }
}
TodosController.resolve = function () {
    getTasks.$inject = ['$http'];
    function getTasks($http) {
        return $http.get('/tasks').then(function(response) {
            var tasks = (response.data && response.data.data) ? response.data.data : [];
            return tasks;
        });
    }
    
    return {
        tasks: getTasks
    }
}

module.exports = TodosController;