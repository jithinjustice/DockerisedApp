var mongoose = require('mongoose');
var project_mgmt = require('../models/projectMgmt');
var express = require('express');
var pmgmt_router = express.Router();

var phpProject = new project_mgmt({
	executionMethodology:"gbt",
	projectmgmtTool:"vsv",
	requirenmentmgmtTool:"vsv"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


pmgmt_router.route('/')

	.get(function(req, res){
		
		project_mgmt.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var pmgt = new project_mgmt(req.body);
			pmgt.executionMethodology=req.body.executionMethodology;
			pmgt.projectmgmtTool=req.body.projectmgmtTool;
			pmgt.requirenmentmgmtTool=req.body.requirenmentmgmtTool;

		   //res.end(JSON.stringify(prjct));
		   
		   pmgt.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'project Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
pmgmt_router.route('/:executionMethodology')
	.get(function(req, res){	

		project_mgmt.find().where('executionMethodology').equals(req.params.executionMethodology).exec(function(err, projectMgmt) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectMgmt);
		res.send(projectMgmt);
		})
	})
	// Delete
	
	.delete(function(req,res){
		project_mgmt.find().where('languages').equals(req.params.languages).remove().exec(function(err, projectMgmt) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectMgmt);
		res.send(projectMgmt);
		})
		
	});
pmgmt_router.route('/:_id')
	.put(function(req,res){
		project_mgmt.findOne({ _id: req.params._id }, function(err,project_mgmt) {
  

			project_mgmt.executionMethodology=req.body.executionMethodology;
			project_mgmt.projectmgmtTool=req.body.projectmgmtTool;
			project_mgmt.requirenmentmgmtTool=req.body.requirenmentmgmtTool;
   
		 project_mgmt.save(function(err) {
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



module.exports = pmgmt_router;