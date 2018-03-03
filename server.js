var express = require('express');
var app = express();
var path = require('path');
var todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'views')));

todoController(app);

app.listen(process.env.PORT || 8000, function() {
    console.log('running..');
});