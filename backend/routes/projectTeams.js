var mongoose = require('mongoose');
var project_team = require('../models/projetTeam');
var express = require('express');
var ptm_router = express.Router();

var phpProject = new project_team({
	
	numberOfDevelopers:6,
	numberOfQA:5,
	almResouces:"abc",
	tLName:"abc",
	pmName:"abc",
	architechName:"abc",
	dmName:"abc",
	accountManager:"abc",
	clientName:"abc"
});

phpProject.save(function(err, phpProject) {
	
	if (err) return console.error(err);
	console.log(phpProject);
});


ptm_router.route('/')

	.get(function(req, res){
		
		project_team.find(function(err, data) {
			if (err) {
			  // insert correct status code	
			  res.send(err);
			} 
			console.log("/projects : JSON response body : " + data);
			res.send(data);
		});
	})

   .post(function(req, res) {

		var pg = new project_team(req.body);
			pg.numberOfDevelopers=req.body.numberOfDevelopers;
			pg.numberOfQA=req.body.numberOfQA;
			pg.almResouces=req.body.almResouces;
			pg.tLName=req.body.tLName;
			pg.pmName=req.body.pmName;
			pg.architechName=req.body.architechName;
			pg.dmName=req.body.dmName;
			pg.accountManager=req.body.accountManager;
			pg.clientName=req.body.clientName;

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
ptm_router.route('/:tLName')
	.get(function(req, res){	

		project_team.find().where('tLName').equals(req.params.tLName).exec(function(err, projectTeam) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectTeam);
		res.send(projectTeam);
		})
	})
	// Delete
	
	.delete(function(req,res){
		project_team.find().where('tLName').equals(req.params.tLName).remove().exec(function(err, projectTeam) {
		//project_team.find().where('projectName').remove(req.params.projectName).exec(function(err, projectBackground) {
		if (err) throw err;
		// show the admins in the past month
		console.log(projectTeam);
		res.send(projectTeam);
		})
		
	});
ptm_router.route('/:_id')
	.put(function(req,res){
		project_team.findOne({ _id: req.params._id }, function(err,project_team) {
  

			project_team.numberOfDevelopers=req.body.numberOfDevelopers;
			project_team.numberOfQA=req.body.numberOfQA;
			project_team.almResouces=req.body.almResouces;
			project_team.tLName=req.body.tLName;
			project_team.pmName=req.body.pmName;
			project_team.architechName=req.body.architechName;
			project_team.dmName=req.body.dmName;
			project_team.accountManager=req.body.accountManager;
			project_team.clientName=req.body.clientName;

   
		 project_team.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.send("team information updated");
		}   
		});
	})
		
	});



module.exports = ptm_router;