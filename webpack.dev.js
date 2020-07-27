const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./src/client/views/index.html",
          filename: "./index.html"
      }),
      new CleanWebpackPlugin({
          dry: true,
          verbose: true,
          cleanStaleWebpackAssets: true,
          protectWebpackAssets: false
      }),
      new BundleAnalyzerPlugin()
    ]
}