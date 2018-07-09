var express = require('express');
var session = require('express-session');
var loginAuth = require('./component/login_module');
var bodyParser = require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

// var mongoose = require('mongoose');
// var User = require('./models/User');
var url = 'mongodb://offis:offis2018@localhost:27017/offis';
var app = express();

app.use(loginAuth)
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'keyboard cat',resave: false, saveUninitialized: true, }))

app.get('/login_user', (req, res)=>{
    if(req.session.dses){
        console.log(req.session.dses)
    }else{
        console.log('data off')
    }
    res.send('session');
})

app.get('/', (req, res)=>{
    //   test session
    console.log(req.session.login_user)
    res.send('Backend Offis');
})

app.get('/get_data_user', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('user'); 
        collection.find({}).toArray((err, docs)=>{
            // console.log(docs);
            res.send(docs);
        });
    });
})


app.listen(3210, () => {
    console.log('Sever Backend Offis @port 3210');
})