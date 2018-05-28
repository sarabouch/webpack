const path = require("path");
const webpack = require('webpack');


module.exports = {
    // The main file for our js
    entry: "./src/index.js",
    // The output files
    output: {
        // where we want to put our output files
        path: path.resolve(__dirname, "dist/assets"),
        // The name for our main files
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot :true
    },
    plugins:  [new webpack.HotModuleReplacementPlugin()]
};

// yarn run build "we use this command in the terminal with every change we make"
