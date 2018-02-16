console.log("inside project Management");

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var projectMgmt= new Schema({
	executionMethodology:String,
	projectmgmtTool:String,
	requirenmentmgmtTool:String
});
 
module.exports = mongoose.model('projectMgmt', projectMgmt);