var fs = require('fs');
function init(app) {
    fs.readdirSync(__dirname + '/').forEach(function(file) {
        if(file === 'index.js') {
            return;
        }
        if (file.toLowerCase().indexOf('.js') > -1) {
            require(__dirname + '/' + file)(app);
        }
    });
}

module.exports = init;