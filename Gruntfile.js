module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/js/",
                    mainConfigFile: "src/js/main.js",
                    name: "lib/almond",
                    include: ["main"],
                    out: "dist/app.js"
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/js/app/**/*.js'],
            options: {
                reporter: require("jshint-stylish"),
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        uglify: {
            all: {
                options: {
                    report: "min"
                },
                files: {
                    "dist/app.min.js": ["dist/app.js"]
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

        compass: {
            dist: {
                options: {
                    sassDir: "src/scss",
                    cssDir: "src/css",
                    noLineComments: true
                }
            }
        },

        jasmine: {
            src: "src/js/app/**/*.js",
            options: {
                specs: "tests/**/*Spec.js",
                template: require("grunt-template-jasmine-requirejs"),
                templateOptions: {
                    requireConfig: {
                        baseUrl: "src/js/",
                        paths: {
                            underscore: "lib/underscore",
                            jquery: "lib/jquery",
                            Backbone: "lib/backbone",
                            text: "lib/text",
                            app: "app/"
                        },
                        shim: {
                            underscore: {
                                exports: "_"
                            },
                            Backbone: {
                                deps: ["underscore", "jquery"],
                                exports: "Backbone"
                            }
                        }
                    }
                }
            }
        },

        watch: {
            sass: {
                files: ["src/scss/**/*.scss"],
                tasks: ["compass"]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("test", ["jasmine"]);

    grunt.registerTask("build", ["jshint", "requirejs", "uglify"]);

    grunt.registerTask("default", ["jshint", "requirejs", "sass", "jasmine", "uglify"]);

};