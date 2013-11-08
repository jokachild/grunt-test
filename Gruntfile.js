module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/js/lib",
                    mainConfigFile: "src/js/main.js",
                    name: "almond",
                    include: ["../main"],
                    out: "dist/app.min.js"
                }
            }
        },
	
	jshint: {
            files: ['Gruntfile.js', 'src/js/app/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        sass: {
            dist: {
                files: {
                    "src/css/app.css": "src/scss/app.scss"
                }
            }
        },

        watch: {
            sass: {
                files: ["src/scss/**/*.scss"],
                tasks: ["sass"]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["jshint", "requirejs", "sass"]);
    
};