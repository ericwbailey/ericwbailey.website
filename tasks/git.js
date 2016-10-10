// ============================================================================
// Task
// Git
// ============================================================================
var gulp          = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help          = require('./help.js'),
    paths         = require('./paths.js'),
    git           = require('gulp-git'),                   // https://www.npmjs.com/package/gulp-git

    currentTime = new Date();


// Tasks ----------------------------------------------------------------------
gulp.task('git-add', false, function() {
    return gulp.src('./docs/*')
        .pipe(git.add());
});

gulp.task('git-commit', false, function() {
    return gulp.src('./docs/*')
        .pipe(git.commit('Deployed site on ' + currentTime));
});

gulp.task('git-push', false, function() {
    git.push('origin', 'master', function (err) {
        if (err) throw err;
    });
});
