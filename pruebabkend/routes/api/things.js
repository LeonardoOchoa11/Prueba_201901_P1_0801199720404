var express = require('express');
var router = express.Router();
var fileModel = require('./pruebamodel');
var data = null;

var bitThingTp = {
    'Empresa' : '',
    'url': '',
    'Nombre': '',
    'Year': '',
    'Rating': '',
    'fechaIng': ''
}

router.get('/', function(req, res, next){
    if(!data){
        fileModel.read(function(err, filedata){
            if(err){
                console.log(err);
                data = [];
                return res.status(500).json({'error': 'Error al obtener Data'});
            }
            data = JSON.parse(filedata);
            return res.status(200).json(data);
        });
    } else{
            return res.status(200).json(data);

    }    
}); // get

router.post('/new', function(req, res, next){
    
    var _thingsData = Object.assign({}, bitThingTp, req.body);
    if(!data){
        data = [];
    }
    data.push(_thingsData);
    fileModel.write(data, function(err){
        if(err){ 
            console.log(err);
            return res.status(500),json({'error': 'Error al obtener Data'});
        }
        return res.status(200).json(_thingsData);
    })
    
}); //nuevo thing

router.put('/done/:thingId', function(req, res, next){
    var _thingId = req.params.thingId;
    console.log(_thingId);
    res.json({"msg":"ok"});
}); // things as done

module.exports = router;