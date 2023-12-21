// main.js (Cliente)
$(function(){
    var socket = io.connect();

    let message = $('#chat-message');
    let chat = $('#chat');

    message.focus();

    $('#message-box').submit(function (e){
        e.preventDefault();
        socket.emit('mensaje-del-cliente', message.val());
        message.val(''); // Limpiar el campo de entrada después de enviar el mensaje
    });

    socket.on('mensaje-del-servidor', function(data){
        console.log(data);
        chat.append(data + '<br>'); // Mostrar el mensaje en el chat
    });
});
