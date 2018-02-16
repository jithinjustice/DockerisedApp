console.log("inside build Tools");

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var buildTool= new Schema({
		buildTool:String,
		packagingType:String,
		repostroge:String,
});
 
module.exports = mongoose.model('buildTool', buildTool);