console.log("inside project architecture");

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var projectArchitecture= new Schema({
	languages:String,
	framework_version:String,
	frontendTechnology:String,
	applicationArchitecture:String,
	dbName:String
});
 
module.exports = mongoose.model('projectArchitecture', projectArchitecture);