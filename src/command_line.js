CommandLine = new (function() {

	this.exec = require('child_process').exec;
	
	this.resetTmpDir = function(callback) {
		CommandLine.exec("mkdir tmp; rm tmp/*", function () {
			callback();
		});
	}
	
})();
