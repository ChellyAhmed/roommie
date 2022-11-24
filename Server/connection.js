const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT; //.env file in the project directory
//Fetch connection details from dotenv 
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const hostPort = process.env.HOSTPORT;
//Connect to the database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : host,
    port : hostPort,
    user : user,
    password : password,
    database : database
});

module.exports = {connection} ;
