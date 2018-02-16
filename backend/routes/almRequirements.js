var mongoose = require('mongoose');
var almRequirement = require('../models/almRequirement');
var sbdmn = require('../models/projectBackground');
var sbdmn = require('../models/projetTeam');
var sbdmn = require('../models/projectArchitecture');
var sbdmn = require('../models/projectMgmt');
var sbdmn = require('../models/developmentTool');
var sbdmn = require('../models/sourcemgmtTool');
var sbdmn = require('../models/buildTool');
var sbdmn = require('../models/unitTesting');
var sbdmn = require('../models/deploymentRelease');

// postman REST : Start
var express = require('express');
var router = express.Router();

// get almRequirements
router.route('/almRequirements')

   .get(function(req, res) {
  almRequirement.find(function(err, data) {
    if (err) {
	  // insert correct status code	
      return res.send(err);
    } 
	console.log("/almRequirements : JSON response body : " + data);
    res.json(data);
	res.end();
  });
})

// get projectBackgrounds
router.route('/projectBackgrounds')

   .get(function(req, res) {
  sbdmn.find(function(err, data) {
    if (err) {
	  // insert correct status code	
      return res.send(err);
    } 
	console.log("/projectBackground : JSON response body : " + data);
    res.json(data);
	res.end();
  });
})

// postman REST : End


// postman REST : Start


router.route('/allAlmRequirements')

   .get(function(req, res) {
   
   almRequirement.findOne({}).populate('projectBackground').exec(function(err, data) {

		if (err) {
		  // insert correct status code	
		  return res.send(err);
		} 
		console.log("/subdomains : JSON response body : " + data);
		res.json(data);
		res.end();
   
		// Your callback code where you can access projectBackground directly through custPhone.projectBackground.name 
	})
})





// postman REST : End


console.log("custphones.js call");

var newSbdmn = new sbdmn({

    name: 'Example Domain'
});

var newalmRequirement = new almRequirement({

	phone: '123-456-7890',
	subdomain: newSbdmn._id
});


// Comment after first successful execution
/*newSbdmn.save(function(err, newSbdmn) {

	console.log("In Save()");
  if (err) return console.error(err);
  console.dir(newSbdmn);
});

newalmRequirement.save(function(err, newalmRequirement) {

	console.log("In Save()");
  if (err) return console.error(err);
  console.dir(newalmRequirement);
});


almRequirement.findOne({}).populate('subdomain').exec(function(err, almRequirement) { 
	
	console.log('**********************');
	console.log(almRequirement);
	console.log('**********************');
// Your callback code where you can access subdomain directly through custPhone.subdomain.name 
})*/

//newalmRequirement.findOne({}).populate('subdomain').exec(function(err, newalmRequirement) { 
// Your callback code where you can access subdomain directly through custPhone.subdomain.name 
//})


// After first save
// Find a single movie by name.
/*usr.findOne({ title: 'tempUsr' }, function(err, tempUsr) {
  if (err) return console.error(err);
  console.log("a single movie by name");
  console.dir(tempUsr);
});*/

// Find all movies.
/*usr.find(function(err, movies) {
  if (err) return console.error(err);
  console.log("all movies");
  console.dir(movies);
});*/

// Find all movies that have a credit cookie.
/*usr.find({ hasCreditCookie: true }, function(err, movies) {
  if (err) return console.error(err);
  console.log("all movies that have a credit cookie");
  console.dir(movies);
});*/

// Find by quering and parameters
/*usr.find({ hasCreditCookie: true }).where('title').equals('tempUsr').exec(function(err, movies) {
  if (err) throw err;

  // show the admins in the past month
  console.log(movies);
});*/

// Update from conditional paramters
/*usr.findOne({ title: 'grudge' }, function(err, tempUsr) {
  if (err) return console.error(err);
  tempUsr.title='tempUsr';
  console.log("a single movie by name");
  console.dir(tempUsr);
  
  tempUsr.save(function(err) {
    if (err) throw err;

    console.log('Movie successfully updated!');
  });
});*/

// Delete
// find the movie with title tempUsr
/*usr.findOneAndRemove({ title: 'tempUsr' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('Movie record deleted!');
});*/

module.exports = router;