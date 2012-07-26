Crypto = new (function() {
	
	// function cmdLineCall(command, callback) {
	// 	var exec, completed, result;
	// 	exec = require('child_process').exec;
	// 	result = null;
	// 	exec(command, function(e, stdout) {
	// 		result = stdout;
	// 	});	
	// }
	
	function CryptoOperation(operation) {
		this.operation = operation;
	}
	
	function KeyGenerator(algorithm) {
		this.algorithm = algorithm;
	};
	KeyGenerator.prototype.generate = function(params) {
		var keyId, file;
		keyId = params.keyId;
		file = 'tmp/test_rsa';
		
		var exec = require('child_process').exec;
		
		// make sure tmp directory exists
		exec('mkdir tmp', function () {
			// delete previous tmp private key
			exec('rm ' + file, function () {
				// delete previous tmp public key
				exec('rm ' + file + '.pub', function () {
					// call keygen
					exec("ssh-keygen -N '' -f " + file, function () {
						// get the private key
						exec("cat " + file, function (err, stdout) {
							// put it in the key store
							Crypto.keys[keyId] = stdout;
						});
					});
				});
			});
		});	
	};
	
	this.keys = {};
	
	this.encrypt = function() {
		return new CryptoOperation('encrypt');
	}

	this.decrypt = function() {
		return new CryptoOperation('decrypt');
	}

	this.sign = function() {
		return new CryptoOperation('sign');
	}

	this.verify = function() {
		return new CryptoOperation('verify');
	}

	this.digest = function() {
		return new CryptoOperation('digest');
	}
	
	this.generateKey = function(algorithm) {
		return new KeyGenerator(algorithm);
	}

})();
