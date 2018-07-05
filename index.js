var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var lowdb = require('lowdb');
var FSync = require('lowdb/adapters/FileSync');
var adapter = new FSync('db.json');
var db = lowdb(adapter);
var app = express();

app.use(bodyParser.json());
// app.use(routerSpace);
app.use(cors(0));
// db.defaults({
//     dataSpace:[]
// }).write();

app.get('/', (req, res)=>{
    res.send('Backend Offis');
})


app.post('/registrasi_user', (req, res)=>{
    res.send()
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Sever Backend Offis @port 8080');
})