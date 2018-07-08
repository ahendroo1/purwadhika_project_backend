var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

// var mongoose = require('mongoose');
// var User = require('./models/User');
var url = 'mongodb://offis:offis2018@localhost:27017/offis';
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{
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

app.post('/register_add_user', (req, res) => {
    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('user');
        collection.insert({
            nama: req.body.nama_lengkap,
            email: req.body.email,
            no_telp: req.body.no_telp,
            password: req.body.password
        }, (err, result)=>{
            res.send(result);
        });
    });
})


app.post('/cek_user_registrasi', (req, res)=>{

    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('user');
        collection.find({email:req.body.email}).toArray((err, docs)=>{
            // if (docs.data.lenght() > 0 ) {
            //     res.send('jsnxjsnx');
            // }else{

            // }
            res.send(docs)

            // if(docs.data.lenght > 0){
            //     res.send(docs)
            
            // } else {

            //     // MongoClient.connect(url, (err, db)=>{
            //     //     var data_registrasi = {
            //     //         nama: req.body.nama_lengkap,
            //     //         email: req.body.email,
            //     //         no_telp: req.body.no_telp,
            //     //         password: req.body.password
            //     //     }
            //     //     collection.insert(data_registrasi, (err, result)=>{
            //     //         res.send(result);
            //     //     });
            //     // });
            // }

            // MongoClient.connect(url, (err, db)=>{
            //     collection.insert({
            //         nama: req.body.nama_lengkap,
            //         email: req.body.email,
            //         no_telp: req.body.no_telp,
            //         password: req.body.password
            //     }, (err, result)=>{
            //         res.send(result);
            //     });
            // });

        });
    });
    
    // MongoClient.connect(url, (err, db)=>{ 

    //     // var data_insert_user = {
    //     //     nama_lengkap: req.body.nama_lengkap, 
    //     //     email:req.body.email, 
    //     //     no_telp: req.body.no_telp, 
    //     //     password: req.body.password };

    //     var collection = db.collection('user'); 

    //         collection.find({$set: {email:req.body.email}}, (err, cell) => {
    //             res.send(cell)
    //         })

    //             // console.log("Berikut data yang tersimpan:");
    //             // console.log(docs)
                

    //             // collection.insert(data_insert_user, (err, result)=>{
    //             //     // console.log(result);
    //             //     res.send(result); 
    //             // });
    // });
})

app.listen(3210, () => {
    console.log('Sever Backend Offis @port 3210');
})