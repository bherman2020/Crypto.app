
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const PORT = 3001
const cors = require('cors');
const { check, validationResult } = require('express-validator');
let app = express();
const mysql = require('mysql');


const { encrypt, decrypt } = require("./EncryptionHandler")


// const email = []

var path = require('path');
var Router = require('router');
var router = new Router(path.join(__dirname,'routes'));


var connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password:"",
        database: "cruddatabase"

});

connection.connect(function(error) {
    if(!error) {
        console.log('connected');
    } else {
        console.log(error);    
    }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.set('view-engine', 'ejs')



app.listen(PORT, () => {
    console.log(`Node server running on port: ${PORT}`);
});
