
expect = require('expect.js');
var EmailAddress = require('../js/EmailAddress');

describe('EmailAddress', function(){
	describe('#isValid()', function(){
		it('should return true when email is in valid format', function() {
			expect(EmailAddress.isValid('info@medio.cz')).to.be(true);
			expect(EmailAddress.isValid('info+test@medio.cz')).to.be(true);
			expect(EmailAddress.isValid('Pepa.Na.Hrad@seznam.cz')).to.be(true);

			expect(EmailAddress.isValid('aaa')).to.be(false);
			expect(EmailAddress.isValid('info@medio.c')).to.be(false);
			expect(EmailAddress.isValid('info@@medio.cz')).to.be(false);
		});
	});
	describe('#check', function(){
		it('should throw Exception if email is not valid', function() {
			function createEmailFn(email) {
				return function() {
					var e = new EmailAddress(email);
				}
			}
			expect(createEmailFn('aaa')).to.throwException(function (e) { // get the exception object
			  expect(e).to.be.a(Error);
			  expect(e.toString()).to.be('Error: Email address "aaa" is not in valid format');
			});
			expect(createEmailFn('aaa@bbb')).to.throwException();
			expect(createEmailFn('aaa@bbb.com')).to.not.throwException();
		});
	});
});
