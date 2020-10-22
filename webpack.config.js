const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  devtool: "inline-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
         test: /\.(json)$/,
         use: [
           'file-loader',
         ],
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin({
  		patterns: [{
  			from: './src/config/manifest.json',
  			to: path.join(__dirname, 'dist'),
  			force: true,
  		}]
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/extension/background/background.js',
        to: path.join(__dirname, 'dist'),
        force: true,
      }]
    })
  ]
};

