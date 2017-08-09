var keystone = require('keystone');
var Types = keystone.Field.Types;



var Song = new keystone.List('Song', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Song.add({
	name: { type: String, required: true },
    enabled: {type: Boolean, default: true },
	url: { type: Types.Url, default: true },
});

Song.register();
