// ============================================================================
// Task
// BrowserSync
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    browsersync = require('browser-sync');               // https://www.browsersync.io/


// Tasks ----------------------------------------------------------------------
gulp.task('browsersync', help.browsersync.parent, function() {
    browsersync({
        server: {
            baseDir: paths.browsersync.basedir,
            index: paths.browsersync.index
        },
        minify: false,
        notify: false,
        logPrefix: "$$projectShortTitle"
    });
});

// - Reloads BrowserSync
gulp.task('browsersync-reload', help.browsersync.reload, function() {
    browsersync.reload();
});
