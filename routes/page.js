var path = require('path');

module.exports = (express) => {
  
    express.get('/', (req, res) => {
        res.sendFile(path.join('/home/nelson/Documentos/elnixenergy/server_mysql/page/home.html'));
    });
}