module.exports = function(app) {
    var index = require('./index');
    var tasks = require('./tasks');
    app.use('/', index);
    app.use('/api', tasks);
};