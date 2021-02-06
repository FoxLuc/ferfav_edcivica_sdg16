var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://andrea-favullo:m0ng0D4RI0B4nF1@clustersdg16.dnkc2.mongodb.net/ClusterSDG16?retryWrites=true&w=majority';
//^^Accesso al server^^

//ESEMPIO: URL/birth
router.get('/', function (req, res, next) { //Prende TUTTO 
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SDG16DB").collection("16.9.1-birth-certification"); //Prende dalla collezione
        collection.find({}).toArray((err, result) => { //Prende secondo la query {} quindi nessun criterio
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

//ESEMPIO: URL/birth/Angola
router.get('/:GeoAreaName', function (req, res, next) { //Prende Secondo il criterio GeoAreaName
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    GeoAreaName = req.params.GeoAreaName; //Variabile Parametro GeoAreaName
    client.connect(err => {
        const collection = client.db("SDG16DB").collection("16.9.1-birth-certification"); //Prende dalla collezione
        collection.find({ 'GeoAreaName': `${GeoAreaName}` }).toArray((err, result) => { //Prende attraverso GeoAreaName
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

//ESEMPIO: URL/birth/get-year/2014
router.get('/get-year/:Year', function (req, res, next) { //Prende Secondo il criterio Year
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    Year = req.params.Year; //Variabile Parametro Year

    let colonna_anno = { GeoAreaCode: 1, GeoAreaName: 1 };
    colonna_anno[`Year_${Year}`] = 1;

    client.connect(err => {
        const collection = client.db("SDG16DB").collection("16.9.1-birth-certification"); //Prende dalla collezione
        collection.find().project(colonna_anno).toArray((err, result) => { //Prende attraverso Year
            if (err) console.log(err.message);
            else {
                res.send(result);
                console.log(result);
                console.log(colonna_anno);
            }
            client.close();
        });
    });
});

module.exports = router;