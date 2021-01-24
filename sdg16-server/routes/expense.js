var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Luca-Ferrari:SDG16_-_ProJect2020@clustersdg16.dnkc2.mongodb.net/ClusterSDG16?retryWrites=true&w=majority';

router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SDG16DB").collection("16.6.1-government-expenditures");
        collection.find({}).toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

router.get('/:GeoAreaName', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    GeoAreaName = req.params.GeoAreaName;
    client.connect(err => {
        const collection = client.db("SDG16DB").collection("16.6.1-government-expenditures");
        collection.find({ 'GeoAreaName': `${GeoAreaName}` }).toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

module.exports = router;