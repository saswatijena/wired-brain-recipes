var express = require('express');
var app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/controllers'));
app.use(express.static(__dirname + '/node_modules'));
app.get('*', (req, res) => res.sendFile('./app/ToDoView.html'))
app.listen(3000, () => console.log('Example app listening on port 3000!'));