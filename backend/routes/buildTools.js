var mongoose = require('mongoose');
var build_tool = require('../models/buildTool');
var express = require('express');
var build_router = express.Router();

var phpProject = new build_tool({
		buildTool:"vfd",
		packagingType:"fdsv",
		repostroge:"vfdsv"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


build_router.route('/')

	.get(function(req, res){
		
		build_tool.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var bldTool = new build_tool(req.body);
			bldTool.buildTool=req.body.buildTool;
			bldTool.packagingType=req.body.packagingType;
			bldTool.repostroge=req.body.repostroge;

		   //res.end(JSON.stringify(prjct));
		   
		   bldTool.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'build tool Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
build_router.route('/:buildTool')
	.get(function(req, res){	

		build_tool.find().where('buildTool').equals(req.params.buildTool).exec(function(err, buildTool) {
		if (err) throw err;
		// show the admins in the past month
		console.log(buildTool);
		res.send(buildTool);
		})
	})
	// Delete
	
	.delete(function(req,res){
		build_tool.find().where('buildTool').equals(req.params.buildTool).remove().exec(function(err, buildTool) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(buildTool);
		res.send(buildTool);
		})
		
	});
build_router.route('/:_id')
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



module.exports = build_router;