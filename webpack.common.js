const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        bundle: './index',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    resolveLoader: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx'],
                        // presets: ['env']
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader'],
            },
        ],
    },

};
