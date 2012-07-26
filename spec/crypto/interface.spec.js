describe("Crypto module", function() {
	
	it("should be defined as a global", function() {
		expect(Crypto).toBeDefined();
	});
	
	it("should be defined as an attribute of the window global", function() {
		expect(window.Crypto).toBeDefined();
	});
	
	describe("#encrypt", function() {
		it("should exist", function() {
			expect(typeof Crypto.encrypt).toBe('function');
		});
		it("should return a CryptoOperation object", function() {
			expect(Crypto.encrypt().constructor.name).toBe('CryptoOperation');
		});
	});
	
	describe("#decrypt", function() {
		it("should exist", function() {
			expect(typeof Crypto.decrypt).toBe('function');
		});
		it("should return a CryptoOperation object", function() {
			expect(Crypto.decrypt().constructor.name).toBe('CryptoOperation');
		});
	});

	describe("#sign", function() {
		it("should exist", function() {
			expect(typeof Crypto.sign).toBe('function');
		});
		it("should return a CryptoOperation object", function() {
			expect(Crypto.sign().constructor.name).toBe('CryptoOperation');
		});
	});

	describe("#verify", function() {
		it("should exist", function() {
			expect(typeof Crypto.verify).toBe('function');
		});
		it("should return a CryptoOperation object", function() {
			expect(Crypto.verify().constructor.name).toBe('CryptoOperation');
		});
	});

	describe("#digest", function() {
		it("should exist", function() {
			expect(typeof Crypto.digest).toBe('function');
		});
		it("should return a CryptoOperation object", function() {
			expect(Crypto.digest().constructor.name).toBe('CryptoOperation');
		});
	});	
		
	describe("#generateKey", function() {
		it("should exist", function() {
			expect(typeof Crypto.generateKey).toBe('function');
		});
		it("should return a KeyGenerator object", function() {
			expect(Crypto.generateKey().constructor.name).toBe('KeyGenerator');
		});
	});

});
