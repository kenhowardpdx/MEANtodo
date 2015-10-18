require('./todos.html');

TodosController.$inject = ['tasks', '$http'];
function TodosController(tasks, $http) {
    var _this = this;
    
    _this.tasks = tasks;
    
    _this.removeTask = function(index) {
        var task = _this.tasks[index];
        $http.delete('/tasks/' + task._id).then(function(response) {
            _this.tasks.splice(index, 1);
        });
    }
    
    _this.addTask = function() {
        _this.tasks.push({ isNew: true });
    }
    
    _this.saveTask = function(index) {
        var task = _this.tasks[index];
        $http({ method: task._id ? 'PUT' : 'POST', url: '/tasks', data: task }).then(function(response) {
            // Task saved!
        });
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