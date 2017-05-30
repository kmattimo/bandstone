var keystone = require('keystone');
var _ = require('underscore');
var Image = keystone.list('Image');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';


	Image.model.find()
	.where('enabled', true)
	.then(function (images) {
		// console.log(images.length + ' images');
		if (images && images.length) {
			locals.image = _.sample(images);
		}
	});

	view.query('page', keystone.list('HomePage').model.findOne());
	view.query('settings', keystone.list('Settings').model.findOne());
	

	// Render the view
	view.render('index');
};
