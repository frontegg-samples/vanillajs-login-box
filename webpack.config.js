const webpack = require('webpack')
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    magicHtml: true,
    historyApiFallback: {
      index: 'index.html'
    }
    // contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development')
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env",]
        }
      }
    }]
  }
}
