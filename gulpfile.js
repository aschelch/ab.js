var {src, dest} = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var wrapper = require('gulp-wrapper');
var concat = require('gulp-concat');
 
function compress(){
    return src('lib/*.js')
    .pipe(concat('ab.js'))
    .pipe(wrapper({ header: '"use strict";\n' }))
    .pipe(dest('dist'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist'));
}

module.exports = {
    compress
}