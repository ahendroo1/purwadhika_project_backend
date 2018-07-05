var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors(0));

app.get('/', (req, res)=>{
    res.send('Backend Offis');
})

app.post('/registrasi_user', (req, res)=>{
    res.send('send');
})

app.listen(3210, ()=>{
    console.log('Sever Backend Offis @port 3210');
})