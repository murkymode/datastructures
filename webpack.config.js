require('dotenv/config');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'client', 'dist'),
    },
    port: process.env.PORT,
    /* historyApiFallback allows dev server to maintain routes */
    historyApiFallback: true,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { /* pure css */
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { /* images */
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
