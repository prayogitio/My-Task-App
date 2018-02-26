var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: String,
    isDone: Boolean
}, { collection: 'tasks' });

module.exports = mongoose.model('Task', TaskSchema);