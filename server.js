var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyPareser = require('body-parser');

var uri = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-fz3gj.mongodb.net/dev?ssl=true&authSource=admin';

var db = mongoose.connect(uri, { useNewUrlParser: true });
var Defect = require('./models/defectModel');

var defectsRouter = express.Router();

app.use(bodyPareser.json);
app.use(bodyPareser.urlencoded);

defectsRouter.route("/defects")
    .post((req, res) => {
        let defect = new Defect(req.body);
        console.log(defect);
        res.send(defect);
    })
    .get((req, res) => {
        debugger;
        Defect.find((err, defects) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(defects);
            }
        });
    });

app.use("/api", defectsRouter);

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/controllers'));
app.use(express.static(__dirname + '/app/services'));
app.use('/angular-ui', express.static(__dirname + '/node_modules/angular-ui-grid'));
app.use('/classic', express.static(__dirname + '/app/view/ClassicDefectMapping.html'));
app.use('/classicmodified', express.static(__dirname + '/app/view/ClassicDefectMappingModified.html'));
app.use('/customer', express.static(__dirname + '/app/view/CustomerCentral.html'));
app.use('/defect', express.static(__dirname + '/app/view/DefectCentral.html'));

app.get('/', (req, res) => res.sendFile('./app/index.html'))
app.listen(3000, () => console.log('My app listening on port 3000!'));