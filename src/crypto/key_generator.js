exports.objConstructor = (function() {
		
	function KeyGenerator(algorithm) {
		this.algorithm = algorithm;
	};
			
	KeyGenerator.prototype.generate = function(params) {
		
		var keyId, file;
		keyId = params.keyId;
		file = 'tmp/test_rsa';
				
		CommandLine.resetTmpDir(function () {
			// call keygen
			CommandLine.exec("ssh-keygen -N '' -f " + file, function () {
				// get the private key
				CommandLine.exec("cat " + file, function (err, stdout) {
					// put it in the key store
					Crypto.keys[keyId] = stdout;
				});
			});
		});
		
	};
	
	return KeyGenerator;
	
})();
