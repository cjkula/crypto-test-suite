Crypto = new (function() {
			
	// CryptoOperation object module
	this.CryptoOperation = require(__dirname + '/crypto/crypto_operation.js').objConstructor;
	// KeyGenerator object module
	this.KeyGenerator = require(__dirname + '/crypto/key_generator.js').objConstructor;
	
	this.keys = {};
	
	this.encrypt = function() {
		return new Crypto.CryptoOperation('encrypt');
	}

	this.decrypt = function() {
		return new Crypto.CryptoOperation('decrypt');
	}

	this.sign = function() {
		return new Crypto.CryptoOperation('sign');
	}

	this.verify = function() {
		return new Crypto.CryptoOperation('verify');
	}

	this.digest = function() {
		return new Crypto.CryptoOperation('digest');
	}
	
	this.generateKey = function(algorithm) {
		return new Crypto.KeyGenerator(algorithm);
	}

})();
