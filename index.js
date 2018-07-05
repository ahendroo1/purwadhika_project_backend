var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://offis:1234@localhost:27017/space';

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Backend Offis');
})

app.get('/get_data_user', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('col_user'); 
        collection.find({}).toArray((err, docs)=>{
            // console.log(docs);
            res.send(docs); 
        });
    });
})

app.post('/registrasi_user', (req, res)=>{
        var data = { 
            nama_lengkap: req.body.nama_lengkap, 
            email:req.body.email, 
        };
    MongoClient.connect(url, (err, db)=>{
        

        var collection = db.collection('col_user'); 
        collection.insert(data, (err, result)=>{
            // console.log(result);
            res.send(result); 
        });

    });
})

app.listen(3210, () => {
    console.log('Sever Backend Offis @port 3210');
})