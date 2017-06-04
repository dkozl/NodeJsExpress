var gulp = require('gulp');
var gulpInject = require('gulp-inject');
var gulpNodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;

gulp.task('inject', function () {

    var wdOptions = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    };

    var giSrc = gulp.src(['./public/styles/*.css', './public/scripts/*.js'], {
        read: false
    });

    var giOptions = {
        ignorePath: '/public'
    };

    return gulp.src('./src/views/*.html')
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
        watch: ['*.js', 'public/**/*.js', 'public/**/*.css', 'src/**/*.html']
    }

    return gulpNodemon(options).on('restart', function (ev) {});
});
