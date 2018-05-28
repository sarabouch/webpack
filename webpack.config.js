const path = require("path");

module.exports ={
    // The main file for our js
    entry:"./src/index.js",
    // The output files
    output:{
        // where we want to put our output files
        path: path.resolve(__dirname, "dist"),
        // The name for our main files
        filename: "bundle.js"
    }
};


// yarn run build "we use this command in the terminal with every change we make"

