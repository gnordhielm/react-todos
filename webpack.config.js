module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Form: 'app/components/Form.jsx',
      Todo: 'app/components/Todo.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    // loaders tell webpack what to do with odd files
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        // apply to every file ending in .jsx
        test: /\.jsx?$/,
        // UNLESS they're in either of these folders
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
