var socket = io()

socket.on('connect', function(){
    console.log('conectado')
})

socket.on('disconnect', function(){
    console.log('Se desconectó el servidor')
})

//Emit = enviar información
socket.emit('enviarMensaje', {
    usuario: 'Omar',
    mensaje: 'Holaaa!'
}, function(resp){
    console.log('Respuesta server: ', resp)
})

//Escuchar info desde el server
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor mandó: ', mensaje)
})