const mysql = require('mysql');

module.exports.execQuery = (sqlQuery, res) => {
    const connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : 'password',
        database : 'elnixenergy'
        });
        
        connection.query(sqlQuery, function(error, results, fields){
            if(error) 
            res.json(error);
            else
            res.json(results);
            connection.end();
            
        });
    }