let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "boundle.min.js",
    path: path.resolve(__dirname, 'dist')
  }
}