JsTestDriver with Jasmine tests
===============================

- Download JsTestDriver
`http://code.google.com/p/js-test-driver/downloads/list`

- Install Jasmine and Jasmine JsTestDriver adapter
`git submodule update --install`

- Start JsTestDriver server
`java -jar JsTestDriver-1.3.5.jar --port 9876 --browser /usr/bin/chromium`

- Run tests
`java -jar JsTestDriver-1.3.5.jar --tests all`
