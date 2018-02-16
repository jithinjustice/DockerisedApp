

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var deployment_release= new Schema({
		deploymentType:String,
		deploymentTool:String,
		applicationServer:String,
		releaseMgmt:String
});
 
module.exports = mongoose.model('deployment_release', deployment_release);