console.log("inside version control system");

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var srcmgmtTool= new Schema({
	sourceCodemgmtTool:String
});
 
module.exports = mongoose.model('srcmgmtTool', srcmgmtTool);