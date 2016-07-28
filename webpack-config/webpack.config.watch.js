const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const cwd = process.cwd();

const webpackBaseConfig = require('./webpack.config.base');
const webpackWatchConfig = {
    entry: {
        devserver: __dirname + '/../node_modules/webpack-dev-server/client?http://localhost:7001/',
        hmr:  __dirname + '/../node_modules/webpack/hot/dev-server'
    },
    devtool: 'cheap-module-source-map',
    cache: true,
    output: {
        path: cwd + '/dist',
        pathinfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = {
    webpackWatchModeConfig: webpackMerge(webpackBaseConfig, webpackWatchConfig),
    webpackDevServerConfig: {
        hot: true,
        // proxy: {
        //     '*': 'http://localhost:'+ serverEmulatorPort
        // },
        publicPath: '/',
        stats: 'errors-only'
    }
};
