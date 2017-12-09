// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'static/dist'),
    SRC: path.resolve(__dirname, 'frontend/src')
};

const extractLess = new ExtractTextPlugin('style.css');

module.exports = {
    entry: path.join(paths.SRC, 'index.js'),
    output: {
        path: paths.DIST,
        filename: 'index.js'
    },
    plugins: [
        extractLess
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: extractLess.extract({
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|bmp)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
