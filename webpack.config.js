/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: "/dist/",
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
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /.css$/,
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "bundle",
            chunks: ['polyfills', 'vendor', 'app']
        }),
        // new webpack.NoErrorsPlugin(),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
        //     mangle: {
        //         keep_fnames: true
        //     }
        // })
    ],

    devServer: {
        port: 3000,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        colors: true,
        historyApiFallback: true,
        compress: true,
        quiet: false,
        progress: true
    }
};