const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.svg$/,
        loader: "babel-loader!svg-react-loader"
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      _utils: path.resolve(__dirname, "src/utils/"),
      _components: path.resolve(__dirname, "src/components/"),
      _containers: path.resolve(__dirname, "src/containers/"),
      _assets: path.resolve(__dirname, "src/assets/"),
      _store: path.resolve(__dirname, "src/store/")
    }
  }
};
