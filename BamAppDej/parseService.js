var Parse = require('parse/react-native');
var LunchOption = Parse.Object.extend("LunchOption");
var Vote = Parse.Object.extend("Vote");

function ParseService() {
	Parse.initialize("FDag4VvDooHzkS6joKK845O8gDWNpwnicK57CxLv", "P4ByaCIjUmszYBK5CNVbTypOK2m1X2zQMQKjpPVB");
}

ParseService.prototype.loadAllLunchOptions = function() {
	var query = new Parse.Query(LunchOption);
	return query.find();
}

ParseService.prototype.addLunchOption = function(option) {
	var newOption = new LunchOption();
	return newOption.save(option);
}

ParseService.prototype.votePlusFor = function(option) {
	var vote = new Vote();
	return vote.save({
		option: option.id
	});
}

ParseService.prototype.getPlusVotesFor = function(option) {
	var query = new Parse.Query(Vote);
	query.equalTo("option", option.id);

	var todaysDate = new Date();
	todaysDate.setHours(0,0,0,0);

	query.greaterThanOrEqualTo("createdAt", todaysDate);

	return query.find();
}

module.exports = ParseService;
