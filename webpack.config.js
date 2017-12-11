module.exports = {
  entry: {
    client: './client',
    server: './server/app'
  },
  output: {
   filename: 'main.js',
   path: './public/js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
};
