var db = require('mongoose').connection,
    Task = require(__dirname + '/../models/task.model')
function todoRoutes(app) {
    app.get('/tasks', function(req, res) {
        Task.find({}, function (err, tasks) {
            if(err) {
                res.send(404, 'Not Found');
                return;
            }
            res.send({ data: tasks });
        });
    });
    
    app.get('/tasks/:id', function(req, res) {
        var taskId = req.params.id;
        Task.findOne({ _id: taskId }, function (err, task) {
            if(err) {
                res.send(500, 'Error');
                return;
            }
            res.send({ data: task });
        });
    });
    
    app.post('/tasks', function(req, res) {
        var task = req.body;
        Task.create(task).then(function (task) {
            res.send({ data: task });
        });
    });
    
    app.put('/tasks', function(req, res) {
        var task = req.body,
            taskId = task._id;
        Task.update({ _id: taskId }, task, null, function (err, raw) {
            if (err) {
                res.send(500, 'Error');
                return;
            }
            res.send({ message: raw });
        });
    });
    
    app.delete('/tasks/:id', function(req, res) {
        var taskId = req.params.id;
        Task.remove({ _id: taskId }, function (err) {
            if (err) {
                res.send(500, 'Error');
                return;
            }
            res.send({ message: 'task deleted' });
        });
    });
}

module.exports = todoRoutes;