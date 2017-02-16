const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
   devtool: 'eval-source-map',
    devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      }
    ]
  },
  plugins: [
   new webpack.BannerPlugin("Copyright Flying Unicorns inc.") ,
   
   ]
}
  