const gulp = require('gulp');

//template engine
const panini = require('panini');

// styles
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

// scripts
const uglify = require('gulp-uglify');

// utilities
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const del = require("del");
const autoImports = require('gulp-auto-imports');

//Tasks
gulp.task('all:clean', function () {
    return del(['build/**/*.html', 'build/**/*.js', 'build/**/*.css'])
});

//Pages
gulp.task('pages:compile', function () {
    return gulp.src('source/pages/**/*.html')
        .pipe(panini({
            root: 'source/pages/',
            layouts: 'source/layouts/',
            partials: 'source/components/',
            data: 'source/data'
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('pages:clean', function () {
    return del(['build/**/*.html'])
});

gulp.task('pages:refresh', function (complete) {
    panini.refresh();
    complete();
});

gulp.task('pages', gulp.series('pages:clean','pages:refresh', 'pages:compile'));

//Styles
gulp.task('css:clean', function () {
    return del('build/**/*.css');
});

gulp.task('sass:load', function () {
    var dest = 'source/styles'
    return (
        gulp
            .src('./source/components/**/*.scss')
            .pipe(autoImports({ preset: 'scss', dest: dest }))
            .pipe(gulp.dest(dest))
    )
});

gulp.task('sass:compile', function (done) {

    return gulp.src('source/styles/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(rename('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/styles'));
});

gulp.task('sass', gulp.series('css:clean', 'sass:load', 'sass:compile'));

//Scripts
gulp.task('js:clean', function () {
    return del('build/**/*.js');
});

gulp.task('js:build', function () {
	return gulp.src(['source/js/plugins/*.js', 'source/js/main.js', 'source/components/**/*.js'])

		.pipe(concat('build.js'))
        .pipe(uglify({ compress: { hoist_funs: false, hoist_vars: false } }))
        .pipe(rename('main.js'))
		.pipe(gulp.dest('build/js'));
});

gulp.task('js', gulp.series('js:clean', 'js:build'));

//Watch
gulp.task('watch', function () {
	gulp.watch(['source/layouts/**/*.html', 'source/pages/**/*.html', 'source/components/**/*.html'], gulp.series('pages'));
    
    gulp.watch(['source/styles/**/*.scss', 'source/components/**/*.scss'], gulp.series('sass'));
    
    gulp.watch(['source/js/**/*.js', 'source/components/**/*.js'], gulp.series('js'));
    
	gulp.watch('source/data/**/*.json', gulp.series('pages'));
});

//Default
gulp.task('default',
	gulp.series(gulp.parallel('pages', 'sass', 'js')));
