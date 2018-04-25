const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {

    return {
        mode: env.NODE_ENV || 'development',

        context: path.join(__dirname, 'src'),

        entry: {
            bundle: './index'
        },

        output: {
            path: path.join(__dirname, env.NODE_ENV === 'development' ? 'build-client-dev' : 'build-client-prod'),
            filename: '[name].js'
        },

        resolve: {
            extensions: ['.js', '.jsx']
        },

        resolveLoader: {
            extensions: ['.js']
        },

        watch: env.NODE_ENV === 'development',
        watchOptions: {
            aggregateTimeout: 100
        },

        devtool: env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-react-jsx']
                            // presets: ['env']
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['eslint-loader']
                }
            ]
        },

        devServer: {
            contentBase: path.join(__dirname, './built/'),
            host: 'localhost',
            port: 8080
        },

        plugins: [
            new CleanWebpackPlugin(['build-client-dev', 'build-client-prod'], {
                verbose: true,
            }),
            new HtmlWebpackPlugin({
                title: 'Specially for Mikalai Ausiannikau',
                welcome: 'Good morning, Mikalai Ausiannikau',
                minify: env.NODE_ENV === 'development' 
                    ? false 
                    : {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true,
                        collapseInlineTagWhitespace: true,
                        html5: true,
                        sortAttributes: true,
                        sortClassName: true,
                    },
                hash: true,
                template: './index.html'
            })
        ]
    }
};
