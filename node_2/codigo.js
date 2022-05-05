
var http = require ('http'); // requerimos el módulo http que ya esta incluido en la instalación de node
var servidor = http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    respuesta.write ('<h3>Servidor Básico con node.js</h3>');
    respuesta.write ('<h3>chupame la pijaaaaaaaaa</h3>');
    console.log('peticion web');
    respuesta.end();

});

servidor.listen(3000); //en que puerto nos va a atender el servidor
console.log('ejecutando un server local con node.js');


