var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    complete: Boolean,
    message: String
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;