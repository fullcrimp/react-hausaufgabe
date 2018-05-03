const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './App',
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
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        // options: {
                        //     modules: true,
                        //     importLoaders: 1,
                        //     localIdentName: "[name]_[local]_[hash:base64]",
                        //     sourceMap: true,
                        //     minimize: true
                        // }
                    }
                ]
            }
            
        ],
    },

};
