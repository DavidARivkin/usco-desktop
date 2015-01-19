var gulp = require('gulp');
var atomshell = require('gulp-atom-shell');

gulp.task('default', function () {
    return gulp.src('app/**').pipe(atomshell({
        version: '0.19.4',
        outputPath: 'build/atom-shell/usco-dekstop',
        productName: 'usco-dekstop',
        productVersion: '0.0.1',
        platform: 'linux'
    })).pipe(atomshell.zfsdest('app.zip'));
});


