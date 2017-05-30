var keystone = require('keystone');
var Types = keystone.Field.Types;


var Settings = new keystone.List('Settings', {
  nocreate: true,
  nodelete: true,
});

Settings.add({
	name: { type: String, required: true, index: true, initial: true },
	analytics: { type: Types.Html, wysiwyg: false },

    description: {type: String},
    title: {type: String}, 

    
});


Settings.defaultColumns = 'name';
Settings.register();