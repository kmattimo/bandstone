var keystone = require('keystone');
var _ = require('underscore');
var Song = keystone.list('Song');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'listen';


	Song.model.find()
	.where('enabled', true)
	.then(function (songs) {
		locals.songs = songs;
	});

	view.query('settings', keystone.list('Settings').model.findOne());
	

	// Render the view
	view.render('listen');
};
