var gulp = require('gulp');
var del = require('del');
var path = require('path');

var MakePlatform = require('enb/lib/make');
var enb_make = new MakePlatform();

var build_dir = 'public_html';

/* TODO: */

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('server', function() {
    // run develop server
});

gulp.task('compile', function(cb) {
    return enb_make.init(process.cwd())
        .then(function() {
            enb_make.loadCache();

            return enb_make.build([]);
        })
        .then(function() {
            enb_make.saveCache();
            enb_make.destruct();
            cb();
        });
});

gulp.task('build', /*['compile'],*/ function() {
    // compile + move all needed files to public_html directory
    gulp.src('desktop.bundles/merged/*.css', { base: 'desktop.bundles/merged' })
        .pipe(gulp.dest(build_dir));
});

gulp.task('img', function() {
    gulp.src('desktop.bundles/merged/img/*', { base: 'desktop.bundles/merged/img' })
        .pipe(gulp.dest(path.resolve(build_dir, 'img')));
});

gulp.task('clean', function(cb) {
    // clean previous builds
    del([
        build_dir,
        'desktop.bundles/*/*.*',
        '!desktop.bundles/*/*.bemjson.js',
        '!desktop.bundles/merged/img'
    ], cb);
});

gulp.task('watch', function() {
    // watch project level blocks and compile
});
