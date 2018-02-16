console.log("inside project background");
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var projectBackground = new Schema({
	misId:Number,
	projectName:String,
	startDate:Date,
	endDate:Date
});
 
module.exports = mongoose.model('projectBackground', projectBackground);