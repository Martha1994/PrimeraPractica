var telegrambot=require('node-telegram-bot-api');
var token='fawhieuer4839rxxxxxxxxxxxxsaassasa';
var bot=new telegrambot(
    token, {
    polling:true
});

bot.getMe().then(function(me) {
    console.log('hi my name is:' + me.username);
    
});







s



bot.onText(/\/soy (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  	console.log(msg);
  bot.sendMessage(fromId, `¡Hola ${resp} !`).then(function(){
		console.log(`saludando a ${resp}`);
	});
});

// DEVUELVE LO QUE ESCRIBES MAS EL NOMBRE DE QUIEN LO ESCRIBIO
bot.on('text', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId,msg.from.first_name + " ha enviado " + msg.text).then(function(){
		console.log(`copiando texto`);
	});
});

//MUESTRA UNA IMAGEN
bot.onText(/\/imagen (.+)/, function (msg) {
  var chatId = msg.chat.id;
 
  var photo ='assets/images/ejem.png';
  bot.sendPhoto(chatId, photo).then(function(){
		console.log(`enviando imagen`);
	});
});

  
//ENVIA UN DOCUMENTO
bot.onText(/^\/documento (.+)$/, function (msg) {
  var chatId = msg.chat.id;
  doc =`assets/tsp.docx`;

  bot.sendDocument(chatId, doc).then(function(){
		console.log(`enviando documento`);
	});
});

//ENVIA UN AUDIO
bot.onText(/^\/cancion (.+)$/, function (msg) {
  var chatId = msg.chat.id;
  audio =`assets/electro.mp3`;

  bot.sendAudio(chatId, audio).then(function(){
		console.log(`enviando audio`);
	});
});


//ENVIA UBICACION
bot.onText(/\/utec/, function (msg) {
  var chatId = msg.chat.id;
  var latitud ='20.075186';
  var longitud='-98.404634';
  bot.sendLocation(chatId, latitud,longitud).then(function(){
  	console.log("enviando ubicacion");
  });
});



