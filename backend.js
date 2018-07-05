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

app.get('/reg_user', (req, res)=>{
    db.get('dataku').push({

            nama_lengkap: req.body.nama_lengkap,
            email: req.body.email,
            no_telp: req.body.no_telp,
            password: req.body.password

        }).write();

    res.send({data: 'Backend Code Offis'})
});

app.post('/registrasi_user', (req, res)=>{
    res.send()
})

app.listen(3210, ()=>{
    console.log('Sever Backend Offis @port 3210');
})