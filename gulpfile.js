var gulp = require('gulp');
var gulpInject = require('gulp-inject');
var gulpNodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;

gulp.task('inject', function () {

    var wdOptions = {
        ignorePath: '../../../public',
        overrides: {
            "bootstrap": {
                "main": [
                "less/bootstrap.less",
                "dist/css/bootstrap.min.css",
                "dist/js/bootstrap.js"
              ]
            },
            "font-awesome": {
                "main": [
                "less/font-awesome.less",
                "css/font-awesome.min.css",
                "scss/font-awesome.scss"
              ]
            }
        }
    };

    var giSrc = gulp.src(['./public/styles/*.css', './public/scripts/*.js'], {
        read: false
    });

    var giOptions = {
        ignorePath: '/public'
    };

    return gulp.src('./src/views/**/*.ejs')
        .pipe(wiredep(wdOptions))
        .pipe(gulpInject(giSrc, giOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['inject'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 8090,
        },
        watch: ['*.js', 'public/**/*.js', 'public/**/*.css', 'src/**/*.ejs']
    }

    return gulpNodemon(options).on('restart', function (ev) {
        console.log('Application restart');
    });
});
