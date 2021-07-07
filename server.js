require('dotenv').config();
exp = require('express'),
	express = exp(),
	bodyParser = require('body-parser'),
	consign = require('consign'),
	cors = require('cors'),
	expressValidator = require('express-validator'),
	express_session = require('express-session'),
	require('./database.js'),
	authMiddleware = require('./middlewares/auth'),
	https = require('https'),
	fs = require('fs'),
	path = require('path');
	require('./multer')



express.use(cors());
express.use(bodyParser.urlencoded({ extended: true }));

consign().include('faturas')
	// //.include('routes') descomentar para usar medidor
	.into(express);

express.use(bodyParser.json());

express.use(express_session({
	secret: 'sasdasddffds',
	resave: false,
	saveUninitialized: false
}));
//express.use(expressValidator())



consign().include('auth')
	//.include('routes') descomentar para usar medidor
	.into(express);

// Comentar abaixo para usar medidor
express.use(authMiddleware)
consign().include('routes')
	.then('controller')
	.into(express);

const port = 8081

const options = {
	cert: fs.readFileSync(path.join(__dirname, 'certs', 'ca.crt')),
	key: fs.readFileSync(path.join(__dirname, 'certs', 'ca.key'))
  };
  
  https.createServer(options, function (req, res) {
	console.log('Servidor operando na porta 8080')
  }).listen(8000);
// express.listen(port, function (teste) {
// 	console.log(`Express funcionando na porta ${port}!\n`);

// })

module.exports = express
