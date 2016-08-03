Package.describe({
	name: 'milligram:milligram-styl',
	version: '1.1.0',
	summary: 'A minimalist CSS framework on Stylus version.',
	git: 'https://github.com/milligram/milligram-styl.git',
	documentation: 'readme.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/milligram.styl'
	], 'client');
});
