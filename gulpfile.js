var gulp = require('gulp');
var rename = require("gulp-rename");
var prettify = require('gulp-jsbeautifier');
var csscomb = require('gulp-csscomb');

var del = require('del');
var path = require('path');

var MakePlatform = require('enb/lib/make');
var enb_make = new MakePlatform();

/* options */
var BUILD_DIR = 'public_html';
var CSS_DIR = 'styles';
var JS_DIR = 'js';
var IMAGE_DIR = 'img';

var INDENTSIZE = 4;

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('server', function() {
    // run develop server
});

gulp.task('compile', function() {
    return enb_make.init(process.cwd())
        .then(function() {
            enb_make.loadCache();

            return enb_make.build([]);
        })
        .then(function() {
            enb_make.saveCache();
            enb_make.destruct();
        });
});

gulp.task('build',
    [
        'compile',
        'copy:html',
        'copy:js',
        'copy:css'
    ],
    function() {
});

gulp.task('copy:html', function() {
    gulp.src('desktop.bundles/*/*.html')
        .pipe(prettify({indentSize: INDENTSIZE}))
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('copy:js', function() {
    gulp.src([
        'desktop.bundles/merged/merged.js',
        'desktop.bundles/merged/merged.browser.bemhtml.js'
    ])
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(path.resolve(BUILD_DIR, JS_DIR)));
});

gulp.task('copy:css', function() {
    gulp.src('desktop.bundles/merged/*.css')
        .pipe(prettify({indentSize: INDENTSIZE}))
        .pipe(csscomb())
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(path.resolve(BUILD_DIR, CSS_DIR)));
});

gulp.task('release', function() {
    // https://github.com/teambition/gulp-ssh
});

gulp.task('img', function() {
    gulp.src('desktop.bundles/merged/img/*', { base: 'desktop.bundles/merged/img' })
        .pipe(gulp.dest(path.resolve(BUILD_DIR, IMAGE_DIR)));
});

gulp.task('clean', function(cb) {
    // clean previous builds
    del([
        BUILD_DIR,
        'desktop.bundles/*/*.*',
        '!desktop.bundles/*/*.bemjson.js',
        '!desktop.bundles/merged/img'
    ], cb);
});

gulp.task('watch', function() {
    // watch project level blocks and compile
});
