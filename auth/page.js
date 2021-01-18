var path = require('path');
const config = require('../config');

module.exports = (express) => {
  
    express.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname + '/../view/home.html'));
    });

    express.get('/home', (req, res) => {
        res.sendFile(path.resolve(__dirname+'/../view/home.js') );
    });

}