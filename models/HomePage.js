var keystone = require('keystone');
var Types = keystone.Field.Types;

var HomePage = new keystone.List('HomePage');

HomePage.add({
	eventLabel: { type: Types.Html, wysiwyg: true, index: true },
	events: { type: Types.Html, initial: true, wysiwyg: true, index: true },
	
});


HomePage.defaultColumns = 'name, email, isAdmin';
HomePage.register();

