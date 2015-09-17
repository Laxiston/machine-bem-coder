var gulp = require('gulp');
var MakePlatform = require('enb/lib/make');
var enb_make = new MakePlatform();

/* TODO: */

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('server', function() {
    // run develop server
});

gulp.task('compile', function() {
    return enb_make.init(process.cwd())
        .then(function () {
            enb_make.loadCache();

            return enb_make.build([]);
        })
        .then(function () {
            enb_make.saveCache();
            enb_make.destruct();
        });
});

gulp.task('build', function() {
    // compile + move all needed files to public_html directory
});

gulp.task('img', function() {
    // optimize all css images
});

gulp.task('clean', function() {
    // clean previous builds
});

gulp.task('watch', function() {
    // watch project level blocks and compile
});
