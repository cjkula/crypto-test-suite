// // load the Crypto module (sets the Crypto global variable)
require('../src/crypto.js');
// // add module to window object
window = { Crypto: Crypto };
