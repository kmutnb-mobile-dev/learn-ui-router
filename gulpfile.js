var gulp 				= require('gulp');
var livereload 	= require('gulp-livereload');
var serve 			= require('gulp-serve');

gulp.task('default', ['watch']);

gulp.task('serve', serve('public'));

gulp.task('watch', ['serve'], function() {
  livereload.listen();
  gulp.watch('public/**').on('change', livereload.changed);
});