var path = require('path');
const config = require('../config');

module.exports = (express) => {
  
    express.get('/', (req, res) => {
        res.sendFile(path.join(`${config.page.pwd}/server_gestao/view/home.html`));
    });

    express.get('/home', (req, res) => {
        res.sendFile(path.join(`${config.page.pwd}/server_gestao/view/home.js`));
    });

}