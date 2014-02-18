var express = require('express');
var app = express();
var mongojs = require('mongojs');

var db = mongojs('mydb', ['metrics']);

app.post('/metrics/:userid/:key/:val', function(req,res) {
    db.metrics.save({
        timeStamp: new Date(),
        userId: req.params.userid,
        key: req.params.key,
        value: req.params.val
    });
    res.send("OK");
});

app.listen(3333);