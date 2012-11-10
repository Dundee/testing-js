
describe('EmailAddress', function(){
	describe('#isValid()', function(){
		it('should return true when email is in valid format', function() {
			expect(EmailAddress.isValid('info@medio.cz')).toBe(true);
			expect(EmailAddress.isValid('info+test@medio.cz')).toBe(true);
			expect(EmailAddress.isValid('Pepa.Na.Hrad@seznam.cz')).toBe(true);

			expect(EmailAddress.isValid('aaa')).toBe(false);
			expect(EmailAddress.isValid('info@medio.c')).toBe(false);
			expect(EmailAddress.isValid('info@@medio.cz')).toBe(false);
		});
	});
	describe('#check', function(){
		it('should throw Exception if email is not valid', function() {
			function createEmailFn(email) {
				return function() {
					var e = new EmailAddress(email);
				}
			}
			expect(createEmailFn('aaa')).toThrow();
			expect(createEmailFn('aaa@bbb')).toThrow();
			expect(createEmailFn('aaa@bbb.com')).not.toThrow();
		});
	});
});
