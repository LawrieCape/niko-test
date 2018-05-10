const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminOptipng = require('imagemin-optipng');
const imageminGifsicle = require('imagemin-gifsicle');

imagemin(['nikotrack-media-export/**/*.{jpg,jpeg,png,gif}'], 'temp123/images', {
	plugins: [
		imageminJpegtran({ progressive: true }),
		imageminPngquant({ quality: '90-100', speed: 1 }),
		imageminOptipng({ optimizationLevel: 7 }),
		imageminGifsicle({ optimizationLevel: 3, interlaced: true }),
	],
}).then((files) => {
	console.log(files);
	//= > [{data: <Buffer 89 50 4e â€¦>, path: 'temp123/images/foo.jpg'}, â€¦]
});
