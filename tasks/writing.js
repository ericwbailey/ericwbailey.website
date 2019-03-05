// ============================================================================
// Task
// Pages
// ============================================================================
var gulp          = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help          = require('./help.js'),
    paths         = require('./paths.js'),
    reportError   = require('./report-error.js'),
    changed       = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    critical      = require('critical'),                   // https://github.com/addyosmani/critical
    entityconvert = require('gulp-entity-convert'),        // https://www.npmjs.com/package/gulp-entity-convert
    hb            = require('gulp-hb'),                    // https://www.npmjs.com/package/gulp-hb
    htmlmin       = require('gulp-html-minifier'),         // https://www.npmjs.com/package/gulp-html-minifier
    plumber       = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    rename        = require("gulp-rename"),                // https://www.npmjs.com/package/gulp-rename
    runSequence   = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// Build
gulp.task('build-writing', help.pages.build, function() {

    var hbstream = hb()
        .partials(paths.writing.partials)
        .data(paths.writing.content)
        .data({timestamp: Date.now()})

    return gulp.src(paths.writing.source)
        .pipe(changed(paths.writing.build))
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(hbstream)
        .pipe(entityconvert())
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(paths.writing.build));
});


// Test
gulp.task('test-writing', help.pages.test, function() {
    return gulp.src(paths.writing.build)
        // https://github.com/addyosmani/critical#gulp
        // Inline style minification handled by htmlmin
        .pipe(critical.stream({
            inline: true,
            base: paths.writing.build,
            width: 720,
            height: 900,
            ignore: [
                '@font-face',
                /url\(/,
                'abbr',
                'abbr[title]',
                '::-webkit-input-placeholder',
                '::-webkit-file-upload-button',
                '.c-accessibility-issues',
                '.l-dialog'
            ],
        }))
        .pipe(htmlmin({
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeComments: true,
            removeRedundantAttributes: true,
            sortAttributes: true,
            sortClassName: true
        }))
        .pipe(gulp.dest(paths.writing.test));
});


// Deploy
gulp.task('deploy-writing', help.pages.deploy, function() {
    return gulp.src(paths.writing.deploy)
        .pipe(gulp.dest(paths.writing.deploy))
});


// Parent
// gulp.task('pages', help.pages.parent, function() {
//     runSequence(
//         'build-pages',
//         'test-pages',
//         'deploy-pages'
//     );
// });
