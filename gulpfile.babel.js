const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
	gulp
		.src('nikotrack-media-export/**/*.{jpg,jpeg,png,gif}')
		.pipe(imagemin([
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 7 }),
				imagemin.gifsicle({ optimizationLevel: 3, interlaced: true }),
			], {
				verbose: true,
			}))
		.pipe(gulp.dest('temp123')));
