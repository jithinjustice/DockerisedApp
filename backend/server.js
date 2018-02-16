var express = require('express');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var monk = require('monk');
var mongoose = require('mongoose');

var project_background = require('./routes/projectBackgrounds'); //routes are defined here
var project_team = require('./routes/projectTeams.js');
var project_architecture = require('./routes/projectArchitectures.js');
var project_mgmt = require('./routes/projectMgmt');
var unit_testing = require('./routes/unitTestings');
var development_tool = require('./routes/developmentTools');
var srcmgmt_tool = require('./routes/sourcemgmtTools');
var build_tool = require('./routes/buildTools');
var unit_testing = require('./routes/unitTestings');
var deployment_release = require('./routes/deploymentReleases');
var get_details = require('./routes/get_details');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use(express.static('public'));
app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
        next();
    })

var db = monk('localhost:27017/alm_q');
// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

//var dbName = 'alm_q';
//var connectionString = 'mongodb://127.0.0.1:27017/' + dbName;
//mongoose.connect(connectionString);


app.use('/alm/project_background', project_background); //This is our route middleware
app.use('/alm/project_team', project_team);
app.use('/alm/project_architecture', project_architecture); //dpne
app.use('/alm/project_mgmt', project_mgmt);
app.use('/alm/development_tool', development_tool);  //done
app.use('/alm/srcmgmt_tool', srcmgmt_tool);
app.use('/alm/build_tool', build_tool);  //done
app.use('/alm/get_details', get_details);
app.use('/alm/unit_testing', unit_testing);
app.use('/alm/deployment_release', deployment_release);



app.set('port', process.env.PORT || 3010);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
