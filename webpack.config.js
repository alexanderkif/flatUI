// Webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../'
            }
          },
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        loaders: [
        {
          loader: 'pug-loader',
          options: { pretty: true }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        // loader: "file-loader?name=/img/[name].[ext]"
        exclude: /fonts/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'img/'
          }
        }],
      },
      {
        test: /\.ico$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'img/'
          }
        }],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
      // chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      inject: false,
      metadata: {
        // available in index.pug under locals
        // TODO: This doesn't work, and we need to figure out how to pass these via apply-loader
        // title, server, baseUrl
      }
    }),
    new HtmlWebpackPlugin({
      filename: '1.html',
      template: 'src/html/1.pug'
    }),
    new HtmlWebpackPlugin({
      filename: '2.html',
      template: 'src/html/2.pug'
    }),
    new HtmlWebpackPlugin({
      filename: '3.html',
      template: 'src/html/3.pug'
    }),
    new HtmlWebpackPlugin({
      filename: '4.html',
      template: 'src/html/4.pug'
    }),
    new HtmlWebpackPlugin({
      filename: '5.html',
      template: 'src/html/5.pug'
    })
  ],
  resolve: {
    alias: {
      img: path.resolve(__dirname, 'src/img')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
};
