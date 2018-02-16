var mongoose = require('mongoose');
var unit_testing = require('../models/unitTesting');
var express = require('express');
var unitTstng_router = express.Router();

var phpProject = new unit_testing({
	unitTestTool:"ff",
	mochFramework:"fasdf",
	codeCoverage:"asfasd",
	percentCodeCoverage:"fasdf",
	uiTesting:"fasdf"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


unitTstng_router.route('/')

	.get(function(req, res){
		
		unit_testing.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var utstng = new unit_testing(req.body);
		utstng.unitTestTool=req.body.unitTestTool;
		utstng.mochFramework=req.body.mochFramework;
		utstng.codeCoverage=req.body.codeCoverage;
		utstng.percentCodeCoverage=req.body.percentCodeCoverage;
		utstng.uiTesting=req.body.uiTesting;

		   //res.end(JSON.stringify(prjct));
		   
		   utstng.save(function(err,data) {
			if (err) {
			  return res.send(err);
			}
		 
			res.send({ message: 'testing information Added'});
		  //res.json(data);
		  });
		});
		
	//req.body.projectName
unitTstng_router.route('/:unitTestTool')
	.get(function(req, res){	

		unit_testing.find().where('unitTestTool').equals(req.params.unitTestTool).exec(function(err, unitTesting) {
		if (err) throw err;
		// show the admins in the past month
		console.log(unitTesting);
		res.send(unitTesting);
		})
	})
	// Delete
	
	.delete(function(req,res){
		unit_testing.find().where('unitTestTool').equals(req.params.unitTestTool).remove().exec(function(err, unitTesting) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(unitTesting);
		res.send(unitTesting);
		})
		
	});
unitTstng_router.route('/:_id')
	.put(function(req,res){
		unit_testing.findOne({ _id: req.params._id }, function(err,unit_testing) {
  

			unit_testing.unitTestTool=req.body.unitTestTool;
			unit_testing.mochFramework=req.body.mochFramework;
			unit_testing.codeCoverage=req.body.codeCoverage;
			unit_testing.percentCodeCoverage=req.body.percentCodeCoverage;
			unit_testing.uiTesting=req.body.uiTesting;
   
		 unit_testing.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.send("unit Testing information updated");
		}   
		});
	})
		
	});



module.exports = unitTstng_router;
