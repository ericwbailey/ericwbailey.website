// ============================================================================
// Task
// Pages
// ============================================================================
var gulp          = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help          = require('./help.js'),
    paths         = require('./paths.js'),
    reportError   = require('./report-error.js'),
    changed       = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    entityconvert = require('gulp-entity-convert'),        // https://www.npmjs.com/package/gulp-entity-convert
    hb            = require('gulp-hb'),                    // https://www.npmjs.com/package/gulp-hb
    htmlmin       = require('gulp-html-minifier'),         // https://www.npmjs.com/package/gulp-html-minifier
    plumber       = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    rename        = require("gulp-rename"),                // https://www.npmjs.com/package/gulp-rename
    runSequence   = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-pages', help.pages.build, function() {

    var hbstream = hb()
        .partials(paths.pages.partials)
        .data(paths.pages.content)
        .data({timestamp: Date.now()})

    return gulp.src(paths.pages.source)
        .pipe(changed(paths.pages.build))
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(hbstream)
        .pipe(entityconvert())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(paths.pages.build));
});


// Test
gulp.task('test-pages', help.pages.test, function() {
    return gulp.src(paths.pages.test.source)
        .pipe(htmlmin({
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            keepClosingSlash: true,
            processConditionalComments: true,
            removeComments: true,
            removeRedundantAttributes: true,
            sortAttributes: true,
            sortClassName: true
        }))
        .pipe(gulp.dest(paths.pages.test.dest));
});


// Deploy
gulp.task('deploy-pages', help.pages.deploy, function() {
    return gulp.src(paths.pages.deploy.source)
        .pipe(gulp.dest(paths.pages.deploy.dest))
});


// Parent
gulp.task('pages', help.pages.parent, function() {
    runSequence(
        'build-pages',
        'test-pages',
        'deploy-pages'
    );
});
