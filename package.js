Package.describe({
	name: 'milligram:milligram-stylus',
	version: '0.0.1',
	summary: 'A minimalist CSS framework on Stylus version.',
	git: 'https://github.com/milligram/milligram-stylus.git',
	documentation: 'readme.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/milligram.styl'
	], 'client');
});
