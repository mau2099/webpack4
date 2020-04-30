const path = require('path');

module.exports = {
  entry: {
    home: path.resolve(__dirname, "index.js"),
    contacto: path.resolve(__dirname, "js","contacto.js"),
    precios: path.resolve(__dirname, "js","precios.js"),
  },
  // mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js'
  }
}