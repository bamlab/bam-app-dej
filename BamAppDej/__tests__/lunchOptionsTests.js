jest.dontMock('../lunchOptions');

describe('LunchOptions', function() {
	var LunchOptions = require('../lunchOptions');
	var lunchOptions = new LunchOptions();

	it('can return the list of options', function() {
		expect(lunchOptions.getAllOptions()).toEqual([]);
	});

	it('support adding options', function() {
		lunchOptions.addOption({
			name: "Chinois"
		});

		expect(lunchOptions.getAllOptions()).toEqual([{
			name: "Chinois"
		}]);
	});
});
