var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  // devtool: debug ? "inline-sourcemap" : null,
  // entry: "./js/main.js",
  module: {
    loaders: [
      
    ]
  },
  // output: {
  //   path: path.join(__dirname, "src"),
  //   filename: "main.min.js"
  // },
  plugins: debug ? [] : [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
