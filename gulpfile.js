const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');

const webPackConfigDev = require('./webpack-config/webpack.config.base');
const webpackWatchConfig = require('./webpack-config/webpack.config.watch');
const webpackWatchModeConfig = webpackWatchConfig.webpackWatchModeConfig;
const webpackDevServerConfig = webpackWatchConfig.webpackDevServerConfig;

function buildDev() {
    return webpackStream(webPackConfigDev)
        .pipe(gulp.dest('./dist'));
}
gulp.task('build:dev', ['clean'], buildDev);

function clean() {
    return del(['./dist']);
}
gulp.task('clean', clean);

function runDevServer() {
    // Start webpack-dev-server
    const server = new WebpackDevServer(
        webpack(webpackWatchModeConfig),
        webpackDevServerConfig
    )
    server.listeningApp.on('listening', function () {
        console.log('webpack-dev-server is up and running. \nPlease visit http://localhost:7001 to run your app');
    });
    server.listen('7001', 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
    });
}
gulp.task('watch:dev', runDevServer);
