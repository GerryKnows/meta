var express = require('express');

var app = express();

app.get('/', function(peticion,respuesta) {
    respuesta.send('pagina de inicio')

});

app.listen(3000, function(peticion,respuesta) {
    console.log ('Hola Mundo Cruel');
 })