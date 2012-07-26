describe("CommandLine module", function() {
	
	it("should be defined as a global", function() {
		expect(CommandLine).toBeDefined();
	});
	
	it("should be defined as an attribute of the window global", function() {
		expect(window.CommandLine).toBeDefined();
	});
	
	it("should execute a command", function() {
		execWaitsRuns('node -v', function(stdout) {
			expect(stdout).toMatch(/^v\d+\.\d+\.\d+/);
		});
	});
	
	describe("#resetTmpDir", function() {
		
		it("should create the tmp folder if none exists", function() {
			execWaitsRunsReply('rm -rf tmp', function(stdout, reply) { // remove any existing tmp directory
				CommandLine.resetTmpDir(reply);		// call app method
			});
			execWaitsRuns('ls -df tmp', function(stdout) {	
				expect(stdout).toMatch(/\btmp\b/);  // see if tmp exists
			});
		});
		
		it("should leave the tmp folder if already exists", function() {
			execWaitsRunsReply('mkdir tmp', function(stdout, reply) { 	// make sure tmp exists
				CommandLine.resetTmpDir(reply);		// call app method
			});
			execWaitsRuns('ls -df tmp', function(stdout) {	
				expect(stdout).toMatch(/^\s*tmp\s*$/);  // see if tmp exists
			});
		});
		
		it("should empty tmp folder of files", function() {
			execWaitsRunsReply('mkdir tmp; touch tmp/a; touch tmp/b', function(stdout, reply) { // create some files
				CommandLine.resetTmpDir(reply);
			});
			execWaitsRuns('ls tmp | wc -l', function(stdout) {
				expect(stdout).toMatch(/^\s*0\s*$/);  // see if tmp exists
			});
		});

	});
	
});