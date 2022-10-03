const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // externals: {'react': 'React'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module :{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                 test: /\.css$/,
                 use: ["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:"./public/index.html"}),
        new webpack.ProvidePlugin({'react': 'React'})
    ]
};