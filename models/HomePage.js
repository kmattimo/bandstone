var keystone = require('keystone');
var Types = keystone.Field.Types;

var HomePage = new keystone.List('HomePage');

HomePage.add({
	eventLabel: { type: Types.Html, wysiwyg: true, index: true },
	events: { type: Types.Html, initial: true, wysiwyg: true, index: true },
	// analytics: {type: Types.Html },
	elevatorpitch: { type: Types.Html},
	soundcloud: { type: Types.Html },
	youtube: { type: Types.Html },
});


HomePage.defaultColumns = 'eventLabel, events, analytics';
HomePage.register();

