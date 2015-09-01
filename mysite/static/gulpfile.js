var gulp = require('gulp'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	port = process.env.port||5000;

gulp.task('connect',function(){
	connect.server({
		root:'./',
        port:port,
		livereload:true
	});
});

gulp.task('browserify',function(){
	gulp.src('./src/js/main.js')
		.pipe(browserify({
			transform:'reactify'
		}))
		.pipe(uglify())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('minify',function(){
    gulp.src('./src/css/main.css')
        .pipe(minify())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js',function(){
	gulp.src('./dist/js/**/*.js')
		.pipe(connect.reload());
});

gulp.task('css',function(){
	gulp.src('./dist/css/**/*.css')
		.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(['./src/js/**/*.js'],['browserify']);
    gulp.watch(['./src/css/**/*.css'],['minify']);
	gulp.watch(['./dist/js/**/*.js'],['js']);
    gulp.watch(['./dist/css/**/*.css'],['css']);
});

gulp.task('default',['browserify','minify','connect','watch']);
gulp.task('build',['browserify','minify']);
