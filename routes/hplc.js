var express = require('express');
var hplcRouter = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./databases/herzberg.db');


// JUST FOR DOCUMENTATION OF HOW THE DATABASE IS STRUCTURED:
// DROP TABLE IF EXISTS ferdi; CREATE TABLE ferdi (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TIMESTAMP, nrOfClicksCurr INTEGER);
// INSERT INTO ferdi (timestamp, nrOfClicksCurr) VALUES (CURRENT_TIMESTAMP, 1);
// SELECT * FROM ferdi;

//hplcRouter.get('/', function(req, res, next) {
//    db.get("SELECT id, timestamp, COUNT(DISTINCT id) AS count, MAX(nrOfClicksCurr) AS max FROM ferdi ORDER BY 1 DESC", function(err, row){
//        let responseJson = {
//            title: 'Response to GET request',
//            calledURL: 'http://localhost:3000/clicks',
//            result: {
//                1: row
//            },
//        };
//        console.log(responseJson)
//        res.send(responseJson);
//    });    
//  });


hplcRouter.get('/', (req, res, next) => {
    db.all("SELECT * FROM hplc ORDER BY id", function(error, rows){
        let responseJson = {
            title: 'Response to GET Request',
            calledURL: 'http://localhost:3000/hplc',
            result: rows
        };
        console.log(responseJson)
        res.send(responseJson)
    })
} )
/* GET clicks listing. */
//router.get('/', function(req, res, next) {
//    //db.get("SELECT * FROM ferdi", function(err, row){
//        res.send({  "id" : "row.id",
//                    "timestamp": "row.timestamp",
//                    "nr_of_clicks_curr": "row.nr_of_clicks_curr" 
//                });
    //});
//});

/* POST new clicks in database. */
//clicksRouter.post('/', (req, res, next) => {
//    
//    console.log("Request vom Client: ", req.body);
//
//    db.run(`INSERT INTO ferdi (timestamp, nrOfClicksCurr) VALUES (CURRENT_TIMESTAMP, ${req.body.data.nrOfClicksCurr})`, function(err, row){
//        
//        console.log("SQLite Database meldet: ", {result: row})
//        res.status(201).send({result: row});
//    
//    });
//});

//    db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function(err, row){
//        if (err){
//            console.err(err);
//            res.status(500);
//        }
//        else {
//            res.status(202);
//        }
//        res.end();
//    });
//});

module.exports = hplcRouter;
