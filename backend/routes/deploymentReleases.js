var mongoose = require('mongoose');
var deployment_release = require('../models/deploymentRelease');
var express = require('express');
var deployment_router = express.Router();

var phpProject = new deployment_release({
		deploymentType:"vsfdvsd",
		deploymentTool:"vsfv",
		applicationServer:"def",
		releaseMgmt:"vfsvef"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


deployment_router.route('/')

	.get(function(req, res){
		
		deployment_release.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var dypTool = new deployment_release(req.body);
			dypTool.deploymentType=req.body.deploymentType;
			dypTool.deploymentTool=req.body.deploymentTool;
			dypTool.applicationServer=req.body.applicationServer;
			dypTool.releaseMgmt=req.body.releaseMgmt;

		   //res.end(JSON.stringify(prjct));
		   
		   dypTool.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'build tool Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
deployment_router.route('/:deploymentType')
	.get(function(req, res){	

		deployment_release.find().where('deploymentType').equals(req.params.deploymentType).exec(function(err, deploymentType) {
		if (err) throw err;
		// show the admins in the past month
		console.log(deploymentType);
		res.send(deploymentType);
		})
	})
	// Delete
	
	.delete(function(req,res){
		deployment_release.find().where('deploymentType').equals(req.params.deploymentType).remove().exec(function(err, deploymentType) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(deploymentType);
		res.send(buildTool);
		})
		
	});

	/*
deployment_router.route('/:_id')
	.put(function(req,res){
		build_tool.findOne({ _id: req.params._id }, function(err,build_tool) {
  

			build_tool.buildTool=req.body.buildTool;
			build_tool.packagingType=req.body.packagingType;
			build_tool.repostroge=req.body.repostroge;
		 build_tool.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.send("source code information updated");
		}   
		});
	})
		
	});
*/


module.exports = deployment_router;