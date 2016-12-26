/**
 * Created on 2016-12-14.
 * @author: Gman Park
 */

var path = require('path');
var _root = path.resolve(__dirname);
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'bundle': ['./src/polyfills.ts', './src/vendor.ts', './src/main.ts']
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: '[name].js',
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true']
            },
            {
                test: /\.html$/,
                loader: 'html?interpolate=require&-minimize'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /.css$/,
                exclude: root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /.css$/,
                include: root('src', 'app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "bundle",
            chunks: ['polyfills', 'vendor', 'app']
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
    ]
};