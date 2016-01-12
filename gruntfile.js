module.exports = function ( grunt ) {

	'use strict';


	// ================================================================
	// CONFIG TASKS
	// ================================================================

	// Define the configuration
	grunt.initConfig({

		// Specifics of npm's package.json handling
		pkg: grunt.file.readJSON( 'package.json' ),

		// Banner
		banner:
			'/*!\n'+
			' * Milligram v<%= pkg.version %>\n'+
			' * <%= pkg.homepage %>\n'+
			' *\n'+
			' * Copyright (c) '+new Date().getFullYear()+' CJ Patoilo\n'+
			' * Licensed under the <%= pkg.license %> license\n'+
			'*/\n\n',

		// DEFAULT TASK
		// ================================================================

		// Watch files and process the above tasks
		watch: {
			options: {
				livereload: false
			},
			grunt: {
				files: [
					'gruntfile.js'
				],
				options: {
					reload: true
				}
			},
			stylus: {
				files: [
					'src/**/*.styl'
				],
				tasks: [
					'stylus',
					'autoprefixer'
				]
			}
		},

		// BUILD TASKS
		// ================================================================

		// Clear files and folders
		clean: {
			all: [
				'dist'
			],
			css: [
				'dist/**/*.css',
				'dist/**/*.map'
			]
		},

		// Compile Stylus files to CSS
		stylus: {
			minify: {
				options: {
					banner: '<%= banner %>',
					compress: true
				},
				files: {
					'dist/milligram.min.css': [ 'src/**/*.styl', '!src/**/_*.styl' ]
				}
			},
			default: {
				options: {
					banner: '<%= banner %>',
					compress: false
				},
				files: {
					'dist/milligram.css': [ 'src/**/*.styl', '!src/**/_*.styl' ]
				}
			}
		},

		// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
		autoprefixer: {
			minify: {
				options: {
					browsers: [
						'last 1 versions'
					],
					map: {
						inline: false
					}
				},
				files: {
					'dist/milligram.min.css': 'dist/milligram.min.css'
				}
			},
			default: {
				options: {
					browsers: [
						'last 1 versions'
					],
					map: false
				},
				files: {
					'dist/milligram.css': 'dist/milligram.css'
				}
			}
		},

		// Copy files and folders.
		copy: {
			all: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**',
					dest: 'dist'
				}]
			}
		}

	});


	// ================================================================
	// REGISTER TASKS
	// ================================================================

	// Default task
	grunt.registerTask( 'default', [
		'build',
		'watch'
	]);

	// Build task
	grunt.registerTask( 'build', [
		'clean:all',
		'stylus',
		'autoprefixer',
		'clean:css',
		'copy'
	]);


	// ================================================================
	// LOAD TASKS
	// ================================================================

	// Automatically loading Grunt tasks
	require( 'load-grunt-tasks' )( grunt );

	// Display the elapsed execution time of Grunt tasks
	require( 'time-grunt' )( grunt );


};


// Code is Poetry
