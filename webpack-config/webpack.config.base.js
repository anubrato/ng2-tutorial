const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import config from the current working directory package.json
const cwd = process.cwd();
const webpack = require('webpack');
const packageJSON = require(path.resolve(cwd, 'package.json'));

module.exports = {
    entry: {
        polyfill: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        main: './src/main.ts'
    },
    devtool: 'source-map',
    debug: true,
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    resolveLoader: {
        root: [
            path.join(__dirname, "node_modules")
        ],
        fallback: path.join(__dirname, "node_modules"),
        modulesDirectories: [path.join(__dirname, './../node_modules')]
    },
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [/src/],
                loaders: ['ts-loader']
            },
            {
                test: /\.tpl$/,
                loader: 'raw'
            },
            {
                test: /\.json$/,
                loader: ['json-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
            hash: true,
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfill'], minChunks: Infinity }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin()
    ],
    node: {
        global: 'window',
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
