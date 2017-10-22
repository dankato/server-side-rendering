const path = require('path');

module.exports = {
  // inform webpack that we are building a bundle for node, rather than for the browser
  target: 'node',

  // tell webpack the root file of our server app
  entry: './src/index.js',

  // tell webpack where to put the output file that is generated
    // __dirname is the current working directory that the project is being executed in
    // inside the directory, we want to place the output bundle in into a new folder called build
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // tell webpack to run babel on every file it runs through
    // using regex to only check js files, once js found, run babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {targets: {browsers: ['last 2 versions']}}]
          ]
        }
      }
    ]
  }
};