var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|jpg|gif|svg)$/, use: ['url-loader']}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}
