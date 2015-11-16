var stripJsonComments = require('strip-json-comments');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(stripJsonComments(source)) : source;
	this.value = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
}