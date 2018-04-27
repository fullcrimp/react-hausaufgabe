const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build-client-prod'),
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './build-client-prod/'),
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new Dotenv({
            path: './.env.prod',
        }),
        new CleanWebpackPlugin(['build-client-prod'], {
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Specially for Mikalai Ausiannikau',
            welcome: 'Good morning, Mikalai Ausiannikau',
            minify: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                html5: true,
                sortAttributes: true,
                sortClassName: true,
            },
            hash: true,
            template: './index.html',
        }),
    ],
});
