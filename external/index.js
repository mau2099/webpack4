const path = require('path');

console.log("Valor de __dirname: " + path.resolve(__dirname));
console.log("Valor de __dirname con resolve: " + path.resolve(__dirname));
console.log("Valor de __dirname con resolve y otraCarpeta: " + path.resolve(__dirname, 'otraCarpeta'));
