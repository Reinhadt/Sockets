const {io} = require('../server')


io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Hola, soy el admin'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    //Escuchar evento que viene del front
    client.on('enviarMensaje', (data, callback) =>{
        console.log(data)

        //Emitir a todos los usuarios
        client.broadcast.emit('enviarMensaje', data)

        /* if(mensaje.usuario){
            callback({
                resp: 'todo bien'
            })
        }else{
            callback({
                resp: 'todo mal'
            })
        } */

    })

})