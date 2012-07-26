describe('KeyGenerator', function() {
	
	var keyGenerator = Crypto.generateKey('RS256');
	
	it("should accept an algorithm attribute", function() {
		expect(keyGenerator.algorithm).toBe('RS256');
	});
	
	describe('generate()', function() {
		
		it("should exist", function() {
			expect(typeof keyGenerator.generate).toBe('function');
		});
		
		// do the operation
		var keyCountBefore = Object.keys(Crypto.keys).length;
		keyGenerator.generate( {keyId: 'mykey'} );
		waitsFor(function () {
			return (Object.keys(Crypto.keys).length > keyCountBefore);
		});
				
		it("should add a key with the provided keyId", function() {
			runs(function () {
				expect(Crypto.keys['mykey']).toBeDefined();
			});
		});
		
		it("should actually generate a key", function() {
			runs(function () {
				expect(Crypto.keys['mykey']).toMatch(/BEGIN RSA PRIVATE KEY/);
			});
		});
		
	});
})