var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({"msg":"ok"});
}); // get

router.post('/new', function(req, res, next){
    var _thingsData = req.body;
    console.log(_thingsData);
    res.json({"msg":"ok"});
}); //nuevo thing

router.put('/done/:thingId', function(req, res, next){
    var _thingId = req.params.thingId;
    console.log(_thingId);
    res.json({"msg":"ok"});
}); // things as done

module.exports = router;