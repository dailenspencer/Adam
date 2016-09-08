module.exports = {
  entry: [
    __dirname + '/client/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.jsx|\.js$/, 
        exclude: /node_modules/, 
        loader: "babel", 
        query: { presets: ['es2015', 'react', 'stage-1'] }
      }
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  }
}