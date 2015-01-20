var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

var NwBuilder = require('node-webkit-builder');
var vulcanize = require('gulp-vulcanize');

var SRC_DIR  = 'src';
var DEST_DIR = 'app';

//which node webkit version to use
var nwVersion  = '0.11.5';
//which platform to use? (TODO:not sure how to deal with this
var nwPlatform = 'linux64';

gulp.task('nw', function () {

    var nw = new NwBuilder({
        version: nwVersion,
        files: DEST_DIR+"/**",/*'./app/**',*/
        /*macIcns: './icons/icon.icns',
        macPlist: {mac_bundle_id: 'myPkg'},*/
        platforms: ['linux64']
    });

    // Log stuff you want
    nw.on('log', function (msg) {
        gutil.log('node-webkit-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function (err) {
        gutil.log('node-webkit-builder', err);
    });
});

gulp.task('vulcanize', function () {
    return gulp.src('src/usco-desktop.html')
        .pipe(vulcanize({
            dest: DEST_DIR,
            strip: true,
            csp:true,
            inline:true
        }))
        .pipe(gulp.dest(DEST_DIR));
});

/*copy any needed files to app folder*/
gulp.task('copy', function(){
    
    return gulp.src([SRC_DIR+'/index.html',SRC_DIR+'/webcomponents.min.js','package.json'])
    .pipe(gulp.dest('app'));
});

/*build node webkit version of the app*/
gulp.task('build:nw',  function(callback){
  runSequence(["copy","vulcanize"], 'nw',
              callback);
});

/* do not regenerate a final node webkit app, just launch it 
(for dev purposes) */
gulp.task('testrun:nw',  function(callback){
  var nwPath = "./cache/"+nwVersion+"/"+nwPlatform+"/nw "+DEST_DIR+"/"
  gutil.log('nw exec path', nwPath);
  return gulp.src('').pipe(
    shell( [nwPath] ) );
});

gulp.task('testrun2:nw',  function(callback){
  runSequence(["copy","vulcanize"], 'testrun:nw',
              callback);
});

gulp.task('default', ['vulcanize', 'copy', 'nw']);
