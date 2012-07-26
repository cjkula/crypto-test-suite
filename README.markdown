# Web Crypto Straw Man Test Suite #

A quick attempt and proof-of-concept to flesh out some of the ideas discussed earlier today for a functional test suite for the Web Crypto API. This implementation is done in Node.js with a Jasmine test suite, building on some of the ideas of Wan-Teh, Harry, and Karen.

Dependencies are minimal:

* Node.js
* NPM (optional)
* jasmine-node (https://github.com/mhevery/jasmine-node)

To execute the suite, run `jasmine-node spec` at the project root. (Can also be done without NPM as per the instructions on the jasmine-node github site.)

Node.js here provides the object wrapper layer for this mock implementation for purposes of having something to build a test suite against. The business end, however, is pushed down to UNIX command line utilities -- anything that runs on UNIX. We can mix and match. Look at the mock up of KeyGenerator in src/crypto.js, line 24, which is running an ssl-keygen on the command line, and then tossing into the key store in a not-particularly-useful way.  :)

The primary advantage of this approach is that the Jasmine tests constructed to build our mock application would then be fully transferable to any user agent, and vice versa.