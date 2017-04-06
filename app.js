var express = require('express')
	,  app = express()
	, load = require('express-load')
	, error = require('./middleware/error')
	, mongoose = require('mongoose')
	, server = require('http').createServer(app)
	, MemoryStore = require('connect/middleware/session/memory')
	, session_store = new MemoryStore()
	, connect = require('connect');

global.db = mongoose.connect('mongodb://localhost/exercicio_pratico_nodejs',function(error){
	if (error) { 
		console.log(error); 
	} else {
		console.log("Conectado ao Banco de Dados!");
	}
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.cookieParser('exercicio_pratico_nodejs'));
app.use(express.session({store: session_store}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);


app.use(express.static(__dirname + '/public'));


app.use(error.notFound);
app.use(error.serverError);

load('models')
    .then('services')
    .then('controllers')
    .then('routes')    
    .into(app);

server.listen(3000, function(){
    console.log('App Exercício Prático Online!');
});