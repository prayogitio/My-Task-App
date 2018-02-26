var express = require('express');
var app = express();
var path = require('path');
var todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client/dist'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client/dist')));

todoController(app);

app.listen(3000, function() {
    console.log('running on port 3000..');
});