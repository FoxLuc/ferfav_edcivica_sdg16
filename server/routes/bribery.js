var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Luca-Ferrari:SDG16_-_ProJect2020@clustersdg16.dnkc2.mongodb.net/ClusterSDG16?retryWrites=true&w=majority';
//^^Accesso al server^^

//ESEMPIO: URL/bribery
router.get('/', function (req, res, next) { //Prende TUTTO
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    client.connect(err => {
        const collection = client.db("SDG16DB").collection("16.5.2-bribery-incidence"); //Prende dalla collezione
        collection.find({}).toArray((err, result) => { //Prende secondo la query {} quindi nessun criterio
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

//ESEMPIO: URL/bribery/Angola
router.get('/:GeoAreaName', function (req, res, next) { //Prende Secondo il criterio GeoAreaName
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    GeoAreaName = req.params.GeoAreaName; //Variabile Parametro GeoAreaName
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    client.connect(err => {
        const collection = client.db("SDG16DB").collection("16.5.2-bribery-incidence"); //Prende dalla collezione
        collection.find({ 'GeoAreaName': `${GeoAreaName}` }).toArray((err, result) => { //Prende attraverso GeoAreaName
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

module.exports = router;