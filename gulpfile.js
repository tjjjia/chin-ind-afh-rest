var gulp = require('gulp'),
	sass = require('gulp-sass'),
	lintspaces = require("gulp-lintspaces"),
	webserver = require('gulp-webserver');

var src = 'src',
	app = 'dist';

// gulp.task('js', function() {
// 	return gulp.src( src + '/js/app.js' )
// 	.pipe(browserify({
// 		transform: 'reactify',
// 		debug: true
// 	}))
// 	.on('error', function (err) {
// 		console.error('Error!', err.message);
// 	})
// 	.pipe(gulp.dest(app + '/js'));
// });

gulp.task('hello', function() {
	console.log('Hello Zell');
});

gulp.task('html', function() {
	gulp.src( app + '/**/*.html');
});

gulp.task('css', function() {
	gulp.src( app + '/css/*.css');
});

gulp.task('sass', function() {
	return gulp.src( src + '/scss/main.scss')
	// return gulp.src( src + '/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
		.pipe(sass())
		.pipe(gulp.dest( app + '/css'))
})

gulp.task('watch', function() {
	// gulp.watch( src + '/js/**/*', ['js']);
	gulp.watch( src + '/scss/**/*.scss', ['sass']);
	gulp.watch( app + '/css/**/*.css', ['css']);
	gulp.watch([ app + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
	gulp.src( app + '/')
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('default', ['watch', 'sass', 'html', 'css', 'webserver']);
