# Webpack v4
## Notes
webpack runs node
ways for run webpack:
* on terminal: `npx webpack --entry ./index.js --output ./bundle.js --mode production `
* on package.json: add a script. e.g. `"build": "webpack --mode production | development"`

```
npm i -D -E

i = install
-D = --save-dev
-E = --save-exact
```
___

### loaders 

Los loaders sirven para que el codigo que inyectamos en js como css, imagenes, no se rompa

* css-loader    -> Se encarga que no tenga información 
* style-loader -> es el que inyecta el css 
* url-loader | file-loader -> es para dar soporte a imagenes, videos y fuentes

### plugins 

Sirven para crear automaticamente un archivo de CSS y un archivo de JS
___


@mau2099 🐧