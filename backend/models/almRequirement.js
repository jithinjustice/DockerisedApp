console.log("inside ALM Requirement");

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var almRequirementSchema = new Schema({

	summary : String,
	projectBackground : { type: ObjectId, ref: 'projectBackground'},
	projectTeam : { type: ObjectId, ref: 'projectTeam'},
	projectArchitecture : { type: ObjectId, ref: 'projectArchitecture'},
	projectMgmt : { type: ObjectId, ref: 'projectMgmt'},
	developmentTool : { type: ObjectId, ref: 'developmentTool'},
	srcmgmtTool : { type: ObjectId, ref: 'srcmgmtTool'},
	// CODE QUALITY
	buildTool : { type: ObjectId, ref: 'buildTool'},
	// CI SERVER
	unitTesting : { type: ObjectId, ref: 'unitTesting'},
	// TESTING
	deployment_release : { type: ObjectId, ref: 'deployment_release'}
	// ENVIRONMENT
	// TRACEABILITY
	// REPORTING TOOL
});
 
module.exports = mongoose.model('almRequirements', almRequirementSchema);