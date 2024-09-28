const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/js/index.js', // Adjust the entry point as needed
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before each build
  },
  mode: 'production', // Set to 'production' for production builds
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource', // Handle image assets
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Adjust template path as needed
    }),
    new InjectManifest({
      swSrc: './src/src-sw.js', // Path to your service worker source file
      swDest: 'sw.js', // Output service worker file
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'), // Serve files from public directory
    compress: true,
    port: 8080, // Port number for the dev server
    hot: true, // Enable hot module replacement
  },
};
