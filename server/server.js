const express = require('express'); 
const bodyparser = require('body-parser'); // allows to parse any incoming request
const PORT = 4000;

const app = express(); // app will take instance of express// instead of 'express.get || express.send'


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.get('/', (req,res)=>{  // Home path

    res.send('<h1>Server is working</h1>'); 
    
});



app.listen(PORT, ()=>{
    console.log('Server is up!')
});