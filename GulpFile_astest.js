var gulp = require('gulp');
var atomshell = require('gulp-atom-shell');


var downloadatomshell = require('gulp-download-atom-shell');

gulp.task('downloadatomshell', function(cb){
    downloadatomshell({
        version: '0.20.6',
        outputDir: 'binaries'
    }, cb);
});

gulp.task('demo', shell.task([
    'binaries/atom default_app'
]));

/*
gulp.task('default', function () {
    return gulp.src('app/**').pipe(atomshell({
        version: '0.19.4',
        outputPath: 'build/atom-shell/usco-dekstop',
        productName: 'usco-dekstop',
        productVersion: '0.0.1',
        platform: 'linux'
    })).pipe(atomshell.zfsdest('app.zip'));
});*/


