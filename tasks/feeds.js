// ============================================================================
// Task
// Errata
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-feeds', help.feeds.build, function() {
    return gulp.src(paths.feeds.source)
        .pipe(gulp.dest(paths.feeds.build));
});


// Test
gulp.task('test-feeds', help.feeds.test, function() {
    return gulp.src(paths.feeds.source)
        .pipe(gulp.dest(paths.feeds.test));
});


// Deploy
gulp.task('deploy-feeds', help.feeds.deploy, function() {
    return gulp.src(paths.feeds.source)
        .pipe(gulp.dest(paths.feeds.deploy));
});


// Parent
gulp.task('feeds', help.feeds.parent, function() {
    runSequence(
        'build-feeds',
        'test-feeds',
        'deploy-feeds'
    );
});
