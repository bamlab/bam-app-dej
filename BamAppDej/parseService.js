var Parse = require('parse/react-native');
var LunchOption = Parse.Object.extend("LunchOption");

function ParseService() {
	Parse.initialize("FDag4VvDooHzkS6joKK845O8gDWNpwnicK57CxLv", "P4ByaCIjUmszYBK5CNVbTypOK2m1X2zQMQKjpPVB");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"});
}

ParseService.prototype.loadAllLunchOptions = function() {
	var query = new Parse.Query(LunchOption);
	return query.find();
}

module.exports = ParseService;
