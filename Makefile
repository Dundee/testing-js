MOCHA_PHANTOM=./node_modules/mocha-phantomjs/lib/mocha-phantomjs.coffee

mocha-phantomjs:
	./phantomjs ${MOCHA_PHANTOM} tests/test.html


