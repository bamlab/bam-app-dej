function LunchOptions() {
	this.options = [];
}

LunchOptions.prototype.getAllOptions = function() {
	return this.options;
}

LunchOptions.prototype.addOption = function(option) {
	this.options.push(option);
}

module.exports = LunchOptions;
