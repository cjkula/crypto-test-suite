// load the CommandLine module (sets the CommandLine global variable)
require('../src/command_line.js');

// load the Crypto module (sets the Crypto global variable)
require('../src/crypto.js');

// add modules to window object
window = { 
	CommandLine: CommandLine,
	Crypto: Crypto 
};

//////////////////////////////////////////////////////////
// helper methods for asynchronous command line processing
//////////////////////////////////////////////////////////

// ###### execWaitsRunsReply ######
// asynchronously
//    executes `command`, waits for completion,
//    calls the callback, and waits for the reply callback.
// All wrapped in Jasmine waitsFor / runs control blocks.
execWaitsRunsReply = function(command, callback) {
	var response, tagback;
	runs(function() {
		response = { completed: false };
		CommandLine.exec(command, function(e, stdout) {
			response.stdout = stdout;
			response.completed = true;
		});
	});
	waitsFor(function() { 
		return response.completed;
	});
	runs(function() {
		tagback = false;
		callback(response.stdout, function() {
			tagback = true;
		});
	});
	waitsFor(function() { 
		return tagback;
	});
}

// ###### execWaitsRuns ######
// same as execWaitsRunsReply except does not wait for reply from callback.
execWaitsRuns = function(command, callback) {
	execWaitsRunsReply(command, function (stdout, reply) {
		callback(stdout);
		reply();
	});
}

