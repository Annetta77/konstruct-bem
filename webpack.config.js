const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // укажите путь к вашему исходному HTML шаблону
      filename: 'index.html', // выводимый файл
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    compress: true,
    port: 9000, 
    open: true,
  },
  devtool: 'inline-source-map',
};
