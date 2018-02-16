var mongoose = require('mongoose');
var development_tool= require('../models/developmentTool');
var express = require('express');
var development_router = express.Router();

var phpProject = new development_tool({
	ideUsed:"eclipse",
	idePlugin:"javadevelopment",
	codeReviewTool:"sonar"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


development_router.route('/')

	.get(function(req, res){
		
		development_tool.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var devlpmnt = new development_tool(req.body);
		devlpmnt.ideUsed=req.body.ideUsed;
		devlpmnt.idePlugin=req.body.idePlugin;
		devlpmnt.codeReviewTool=req.body.codeReviewTool;

		   //res.end(JSON.stringify(prjct));
		   
		   devlpmnt.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'development tools information Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
development_router.route('/:ideUsed')
	.get(function(req, res){	

		development_tool.find().where('ideUsed').equals(req.params.ideUsed).exec(function(err, developmentTool) {
		if (err) throw err;
		// show the admins in the past month
		console.log(developmentTool);
		res.send(developmentTool);
		})
	})
	// Delete
	
	.delete(function(req,res){
		development_tool.find().where('ideUsed').equals(req.params.ideUsed).remove().exec(function(err, developmentTool) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(developmentTool);
		res.send(developmentTool);
		})
		
	});
development_router.route('/:_id')
	.put(function(req,res){
		development_tool.findOne({ _id: req.params._id }, function(err,development_tool) {
  

			development_tool.ideUsed=req.body.ideUsed;
			development_tool.idePlugin=req.body.idePlugin;
			development_tool.codeReviewTool=req.body.codeReviewTool;

   
		 development_tool.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.send("development tools information updated");
		}   
		});
	})
		
	});



module.exports = development_router;