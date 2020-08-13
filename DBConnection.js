const mysql = require("mysql");

function getConnection(){
    var con = mysql.createConnection({ // con short for connection
        host:"localhost",
        user:"root",
        password:"",
        database:"discussion"
    });
    return con;
}

module.exports.getConnection = getConnection;