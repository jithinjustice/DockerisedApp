var mongoose = require('mongoose');
var project_background = require('../models/projectBackground');
var express = require('express');
var pbg_router = express.Router();

var phpProject = new project_background({
	
	misId: 2357,
	projectName: 'bluehornet',
	startDate: new Date(),
	endDate: new Date()
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


pbg_router.route('/')

	.get(function(req, res){
		
		project_background.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var pg = new project_background(req.body);
			pg.misId=req.body.misId;
			pg.projectName=req.body.projectName;
			pg.startDate=req.body.startDate;
			pg.endDate=req.body.endDate;

		   //res.end(JSON.stringify(prjct));
		   
		   pg.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'project Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
pbg_router.route('/:projectName')
	.get(function(req, res){	

		project_background.find().where('projectName').equals(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectBackground);
		res.send(projectBackground);
		})
	})
	// Delete
	
	.delete(function(req,res){
		project_background.find().where('projectName').equals(req.params.projectName).remove().exec(function(err, projectBackground) {
		//project_background.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectBackground);
		res.send(projectBackground);
		})
		
	});
pbg_router.route('/:_id')
	.put(function(req,res){
		project_background.findOne({ _id: req.params._id }, function(err,project_background) {
  

			project_background.misId=req.body.misId;
			project_background.projectName=req.body.projectName;
			project_background.startDate=req.body.startDate;
			project_background.endDate=req.body.endDate;

   
		 project_background.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.send("employee updated");
		}   
		});
	})
		
	});



module.exports = pbg_router;