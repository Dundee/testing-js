
testdriver:
	java -jar JsTestDriver-1.3.5.jar --tests all

run-server:
	java -jar JsTestDriver-1.3.5.jar --port 9876 --browser /usr/bin/chromium
