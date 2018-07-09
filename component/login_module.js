var loginExpress = require('express').Router();


loginExpress.get('/cek_login_module', (req, res)=>{
    res.send('module login active');
})


loginExpress.post('/register_add_user', (req, res) => {
    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('user');
        var data_insert = {
            nama: req.body.nama_lengkap,
            email: req.body.email,
            no_telp: req.body.no_telp,
            password: req.body.password
        }
        collection.insert({
            nama: req.body.nama_lengkap,
            email: req.body.email,
            no_telp: req.body.no_telp,
            password: req.body.password
            
        }, (err, result)=>{
            req.session.nama = data_insert.nama ;
            res.send(result);
        });
    });
})


loginExpress.post('/cek_user_registrasi', (req, res)=>{

    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('user');
        collection.find({email:req.body.email}).toArray((err, docs)=>{
            // if (docs.data.lenght() > 0 ) {
            //     res.send('jsnxjsnx');
            // }else{

            // }
            res.send(docs)

        });
    });

})

module.exports = loginExpress ;