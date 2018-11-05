const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlConfig = {
  title: 'Login component',
  template: path.resolve(__dirname, 'src', 'index.html'),
  stylesPath: 'css',
  scriptsPath: 'js'
};
const isProduction = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader'];
const cssProduction = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader']
});
const cssConfig = isProduction ? cssProduction : cssDev;

module.exports = {
  entry: {
    [path.join(htmlConfig.scriptsPath, 'index')]: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },

  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
          plugins: [
            'transform-object-rest-spread', 
            'transform-class-properties',
            // Enables dynamic loading of modules;
            // useful for progressive web apps. 
            // 'syntax-dynamic-import' 
          ]
        },

      },
      {   
        test: /\.(css)$/,                
        use: cssConfig
      }            
    ]
  },

  devServer: {
    hot: true, // We're using Hot Module Replacement
    contentBase: path.resolve(__dirname, 'src'),
    compress: true,
    stats: 'minimal',
    port: 3000
  },

  plugins: [
    // Automatically generates index.html with all scripts included.
    new HtmlWebpackPlugin({ 
      title: htmlConfig.title,
      template: htmlConfig.template
    }),

    new ExtractTextPlugin({
      filename: path.join(htmlConfig.stylesPath, 'index.css'),
      disable: !isProduction
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()         
  ],

  devtool: isProduction ? 'none' : 'source-map'
};