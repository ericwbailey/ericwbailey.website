// ============================================================================
// Task
// Sitemap
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    sitemap     = require('gulp-sitemap');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
gulp.task('sitemap', help.sitemap, function() {
    return gulp.src(paths.sitemap.source, {
        read: false
    })
    .pipe(sitemap({
        siteUrl: 'https://$$projectURL.com'
    }))
    .pipe(gulp.dest(paths.sitemap.dest));
});
