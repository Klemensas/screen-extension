const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new CopyPlugin({ patterns: [
      { from: 'public/', to: '../' },
    ]}),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      SERVER_API: 'http://localhost:9000',
    }),
  ],
  entry: {
    popup: path.join(__dirname, 'src/popup/index.tsx'),
    background: path.join(__dirname, 'src/background/index.ts'),
    content: path.join(__dirname, 'src/content/index.tsx'),
    seenitContent: path.join(__dirname, 'src/content/seenitContent.tsx'),
    iframeContent: path.join(__dirname, 'src/content/iframeContent.ts'),
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // Creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // Translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // Compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader' // Creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // Translates CSS into CommonJS
          },

        ]
      },
      {
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
        test: /\.(graphql|gql)$/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
};
