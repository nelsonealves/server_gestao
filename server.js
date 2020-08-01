require('dotenv').config();
exp = require('express'),
express = exp(),
bodyParser = require('body-parser'),
consign = require('consign'),
cors = require('cors'),
expressValidator = require('express-validator'),
express_session = require('express-session'),



express.use(bodyParser.json());
express.use(express_session({
	secret: 'sasdasddffds',
	resave: false,
	saveUninitialized: false
}));
//express.use(expressValidator())

express.use(cors());

consign().include('routes')
.then('controller')
.then('model')
.then('database.js')
.into(express);;

express.listen(process.env.PORT || 8081, function(){
  console.log("Express ok!\n");
})

module.exports = express

