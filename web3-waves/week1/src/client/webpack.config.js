const path = require("path");

module.exports = {
  entry: ["./app.js"],
  output: {
    path: path.resolve("../public"),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
