var mongoose = require('mongoose');
var srcmgmt_tool = require('../models/sourcemgmtTool');
var express = require('express');
var srcmgmt_router = express.Router();

var phpProject = new srcmgmt_tool({
	sourceCodemgmtTool:"sonar"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


srcmgmt_router.route('/')

	.get(function(req, res){
		
		srcmgmt_tool.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var srcmgmt = new srcmgmt_tool(req.body);
		srcmgmt.sourceCodemgmtToo=req.body.sourceCodemgmtToo;

		   //res.end(JSON.stringify(prjct));
		   
		   srcmgmt.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'source code information Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
srcmgmt_router.route('/:sourceCodemgmtTool')
	.get(function(req, res){	

		srcmgmt_tool.find().where('sourceCodemgmtTool').equals(req.params.sourceCodemgmtTool).exec(function(err, sourcemgmtTool) {
		if (err) throw err;
		// show the admins in the past month
		console.log(sourcemgmtTool);
		res.send(sourcemgmtTool);
		})
	})
	// Delete
	
	.delete(function(req,res){
		srcmgmt_tool.find().where('sourceCodemgmtTool').equals(req.params.sourceCodemgmtTool).remove().exec(function(err, sourcemgmtTool) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(sourcemgmtTool);
		res.send(sourcemgmtTool);
		})
		
	});
srcmgmt_router.route('/:_id')
	.put(function(req,res){
		srcmgmt_tool.findOne({ _id: req.params._id }, function(err,srcmgmt_tool) {
  

			srcmgmt_tool.sourceCodemgmtToo=req.body.sourceCodemgmtToo;
		 srcmgmt_tool.save(function(err) {
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



module.exports = srcmgmt_router;