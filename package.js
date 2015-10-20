Package.describe({
	name: 'ryanwu:gridster',
	version: '0.0.1',
	summary: 'A jQuery plugin that makes building intuitive draggable layouts from elements spanning multiple columns',
	git: 'https://github.com/ryanhanwu/meteor-gridster.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2');
	api.use('jquery@1.11.3_2', 'client');
	api.addFiles('lib/gridster.js/dist/jquery.gridster.min.css', 'client');
	api.addFiles('lib/gridster.js/dist/jquery.gridster.min.js', 'client');
});
