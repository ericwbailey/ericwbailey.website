// ============================================================================
// Task
// Vendor
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    rename      = require("gulp-rename"),                // https://www.npmjs.com/package/gulp-rename
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// A11y Dialog
gulp.task('vendor-a11ydialog', help.vendor.a11ydialog, function() {
    return gulp.src(paths.vendor.a11ydialog.source)
        .pipe(gulp.dest(paths.vendor.a11ydialog.dest));
});


// Parent
gulp.task('vendor', help.vendor.parent, function() {
    runSequence(
        'vendor-a11ydialog'
    );
});
