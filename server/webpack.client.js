const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

  // tell webpack the root file of our client app
  entry: './src/client/client.js',

  // tell webpack where to put the output file that is generated
    // __dirname is the current working directory that the project is being executed in
    // inside the directory, we want to place the output bundle in into a new folder called build
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);