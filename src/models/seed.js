var db = require('mongoose').connection,
    Task = require('./task.model');
    
var tasks = ['wash laundry', 'do dishes', 'solve world hunger'];

tasks.forEach(function(task) {
    Task.find({ message: task }, function(err, tasks) {
        if(!err && !tasks.length) {
            Task.create({ complete: false, message: task });
        } 
    });
});