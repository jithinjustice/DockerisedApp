console.log("inside unit testing");

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var unitTesting= new Schema({
	unitTestTool:String,
	mochFramework:String,
	codeCoverage:String,
	percentCodeCoverage:String,
	uiTesting:String
});
 
module.exports = mongoose.model('unitTesting', unitTesting);