/* eslint-disable */
const path = require('path');
const { NODE_ENV = 'production' } = process.env;
const nodeExternals = require('webpack-node-externals');

require('dotenv').config();

const isEnvDevelopment = ['development', 'development-feature'].includes(process.env.NODE_ENV)

module.exports = {
  entry: './index.ts',
  mode: NODE_ENV,
  watch: isEnvDevelopment,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  externals: [ nodeExternals() ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
    alias: {
      "config": path.resolve(__dirname, './config/'),
      "models": path.resolve(__dirname, './models/'),
      "services": path.resolve(__dirname, './services/'),
      "shared": path.resolve(__dirname, './shared/'),
    },
  },
};
