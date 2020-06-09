const mysql = require('mysql'),
exp = require('express'),
express = exp(),
bodyParser = require('body-parser'),
consign = require('consign'),
cors = require('cors'),
expressValidator = require('express-validator'),
express_session = require('express-session');

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
.into(express);;

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'password',
  database : 'elnixenergy'
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('MySQL ok!\n');
    express.listen(8081, function(){
        console.log("Express ok!\n");
    });
  })


module.exports = express;

//express.use(bodyParser.urlencoded({extended: true}));



