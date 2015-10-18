var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

require('./task.model');

require('./seed');