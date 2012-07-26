# Web Crypto Test Suite #
### Straw Man / Proof of Concept ###

A quick attempt and proof-of-concept to flesh out some of the ideas discussed 7/25/12 in Mountain View regarding a functional test suite for the Web Crypto API. The implementation is in Node.js with a Jasmine test suite, building on some of the ideas expressed by Wan-Teh, Harry, Karen, and myself.

Basic dependencies are minimal:

* Node.js
* jasmine-node (https://github.com/mhevery/jasmine-node)
* NPM (Optional. See instructions for jasmine-node.)

Additional dependencies will be needed to support the crypto back end.

To run the suite, execute `jasmine-node spec` at the project root.

Node.js provides the object wrapper layer for a full mock implementation, created for the purpose of having something against which to build a real test suite. The crypto dirty work, however, would be pushed down to UNIX command line utilities, allowing the possibility of leveraging anything that runs on UNIX. (Can mix and match! Though probably smart to choose a language or two and pare down to a small but flexible set of tools.)

See src/crypto/key_generator.js, lines 13–19, which executes system ssl-keygen, and then tosses the result into the key store in a not-particularly-useful way.  : )

The advantage of this general approach, as I see it, is that the Jasmine tests constructed to build our mock application would then be fully transferable to any user-agent development build, and vice versa.