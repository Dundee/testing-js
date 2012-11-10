
var EmailAddress = (function () {

	/**
	 * @param {String} email
	 * @constructor
	 */
    function EmailAddress(email) {
		this.emailAddress = email;
		this.check();
    }

	EmailAddress.FORMAT = '[a-z0-9-_+\.]+@[a-z0-9.-]+\.[a-z]{2,4}';

	/**
	 * @param {String} email
	 * @return {Boolean}
	 */
	EmailAddress.isValid = function isValid(email) {
		var r = new RegExp('^' + EmailAddress.FORMAT + '$', 'i');
		return r.test(email);
	};

    EmailAddress.prototype.check = function () {
		if (!EmailAddress.isValid(this.emailAddress)) {
			throw Error('Email address "' + this.emailAddress + '" is not in valid format');
		}
    };

	/**
	 * @return {string}
	 */
	EmailAddress.prototype.toString = function () {
		return this.emailAddress;
	};

    return EmailAddress;

})();

if (typeof exports === 'undefined') {
	this['EmailAddress'] = EmailAddress;
} else {
	module.exports = EmailAddress;
}

