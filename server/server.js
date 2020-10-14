// To run the server without automatic updates use --- node server.js
// To run the server with automatic updates use --- nodemon server.js
const express = require('express'); 
const bodyparser = require('body-parser'); // allows to parse any incoming request
let mysql = require('mysql');
const PORT = 4000;

const app = express(); // app will take instance of express// instead of 'express.get || express.send'

let sqlCon = mysql.createConnection({ // mysql connection 
    host:'localhost',
    user:'root', 
    password:'', // your password
    database:'' // database that IS created// 
});

sqlCon.connect((err)=>{
    if(err) return console.log('Error: ' + err.message);
    console.log('Succesful connection to MySql server')

});

app.use(bodyparser.urlencoded({extended:false}));   // middleware
app.use(bodyparser.json()); // parses any request to JSON from client


app.get('/api', (req,res)=>{  // home path
    res.send('<h1>Server is working</h1>'); 
});


app.listen(PORT, ()=>{
    console.log('Server is up!')
});