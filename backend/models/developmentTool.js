console.log("inside development tools");

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var developmentTool= new Schema({
	ideUsed:String,
	idePlugin:String,
	codeReviewTool:String
});
 
module.exports = mongoose.model('developmentTool', developmentTool);