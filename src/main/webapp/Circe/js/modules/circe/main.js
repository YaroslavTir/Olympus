define(function (require, exports) {
	
	var ko = require('knockout')
	
	var generateComponent = require('./components/GenerateComponent');
	ko.components.register('generate-component', generateComponent);
	
});
