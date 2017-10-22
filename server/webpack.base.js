module.exports = {
  // babel config
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
}