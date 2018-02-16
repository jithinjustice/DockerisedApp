console.log("inside project Team");

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var projectTeam= new Schema({
	numberOfDevelopers:Number,
	numberOfQA:Number,
	almResouces:String,
	tLName:String,
	pmName:String,
	architechName:String,
	dmName:String,
	accountManager:String,
	clientName:String
});
 
module.exports = mongoose.model('projectTeam', projectTeam);