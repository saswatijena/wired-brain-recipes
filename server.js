var express = require('express');
var path = require('path');
var app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/controllers'));
app.use(express.static(__dirname + '/app/services'));
app.use(express.static(__dirname + '/node_modules'));
app.use('/classic', express.static(__dirname + '/app/view/ClassicDefectMapping.html'));
app.use('/customer', express.static(__dirname + '/app/view/CustomerCentral.html'));

app.get('*', (req, res) => res.sendFile('./app/index.html'))
app.listen(3000, () => console.log('Example app listening on port 3000!'));