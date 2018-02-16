var mongoose = require('mongoose');
var project_architecture = require('../models/projectArchitecture');
var express = require('express');
var parc_router = express.Router();

var phpProject = new project_architecture({
	
	languages:"nodejs",
	framework_version:"v4.0",
	frontendTechnology:"angularjs",
	applicationArchitecture:"MVC",
	dbName:"Mongodb"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


parc_router.route('/')

	.get(function(req, res){
		
		project_architecture.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var pa = new project_architecture(req.body);
			pa.languages=req.body.languages;
			pa.framework_version=req.body.framework_version;
			pa.frontendTechnology=req.body.frontendTechnology;
			pa.applicationArchitecture=req.body.applicationArchitecture;
			pa.dbName=req.body.dbName;

		   //res.end(JSON.stringify(prjct));
		   
		   pa.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'project Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
parc_router.route('/:languages')
	.get(function(req, res){	

		project_architecture.find().where('languages').equals(req.params.languages).exec(function(err, projectArchitecture) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectArchitecture);
		res.send(projectArchitecture);
		})
	})
	// Delete
	
	.delete(function(req,res){
		project_architecture.find().where('languages').equals(req.params.languages).remove().exec(function(err, projectArchitecture) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectArchitecture);
		res.send(projectArchitecture);
		})
		
	});
parc_router.route('/:_id')
	.put(function(req,res){
		project_architecture.findOne({ _id: req.params._id }, function(err,project_team) {
  

			project_architecture.languages=req.body.languages;
			project_architecture.framework_version=req.body.framework_version;
			project_architecture.frontendTechnology=req.body.frontendTechnology;
			project_architecture.applicationArchitecture=req.body.applicationArchitecture;
			project_architecture.dbName=req.body.dbName;
   
		 project_architecture.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.send("Architecture information updated");
		}   
		});
	})
		
	});



module.exports = parc_router;