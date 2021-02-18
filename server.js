require('dotenv').config();
exp = require('express'),
express = exp(),
bodyParser = require('body-parser'),
consign = require('consign'),
cors = require('cors'),
expressValidator = require('express-validator'),
express_session = require('express-session'),
require('./database.js'),
authMiddleware = require('./middlewares/auth');


express.use(bodyParser.json());
express.use(bodyParser.urlencoded());
express.use(express_session({
	secret: 'sasdasddffds',
	resave: false,
	saveUninitialized: false
}));
//express.use(expressValidator())

express.use(cors());

consign().include('auth')
//.include('routes') descomentar para usar medidor
.into(express);

// Comentar abaixo para usar medidor
express.use(authMiddleware)
consign().include('routes')
.then('controller')
.into(express);

express.listen(process.env.PORT || 8081, function(){
  console.log("Express ok!\n");
})

module.exports = express
