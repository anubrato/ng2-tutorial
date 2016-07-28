const webpack = require('webpack-stream');
const webPackConfigDev = require('./webpack.config.js');
const gulp = require('gulp');

function buildDev() {
    return webpack(webPackConfigDev)
        .pipe(gulp.dest('./dist'));
}
gulp.task('build:dev', buildDev);
