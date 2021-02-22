
const path = require('path');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /.js$/,
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
    
};

// yarn add babel-core -> allows to use babel in tools like webpack
// yarn add babel-loader -> teach webpack how to use