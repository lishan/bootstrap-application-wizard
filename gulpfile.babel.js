'use strict';
import gulp from 'gulp';
import gulpLoad from 'gulp-load-plugins';

let $ = gulpLoad();

gulp.task('css', ()=> {
	gulp.src("src/*.css")
		.pipe($.cleanCss())
		.pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
    gulp.src("src/*.js")
        .pipe($.uglify())
        .pipe(gulp.dest('dist'));

});

gulp.task('default',['css','js']);
