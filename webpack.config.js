const path = require('path');

module.export = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}