//var elixir = require('laravel-elixir');
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var inject = require('gulp-inject');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir(function(mix) {
//    mix.sass('app.scss');
//});

gulp.task('css', function() {
    return gulp.src('public/css/main.css')
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/min'))
        .pipe(notify({ message: 'css minified!' }));
});

gulp.task('inject', function() {
    return gulp.src('resources/views/index.php')
        .pipe(inject(gulp.src(['.bower_components/**/*.js'], {read: false})))
        .pipe(gulp.dest('resources/views'));
});

gulp.task('default', function() {
    gulp.run('css');
    gulp.run('inject');

    gulp.watch('public/css/*.css', function() {
        gulp.run('css');
    });
});
