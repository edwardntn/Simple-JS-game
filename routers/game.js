var express = require('express');

var customRouter = function (app) {

    var gameRouter = express.Router();


    var Terran = require('../handlers/terrans');
    var Zerg = require('../handlers/zerg');

    var john = new Terran('John');
    var zergy = new Zerg('Zergy');

    gameRouter.get('/', function (req, res, next) {
        res.status(200).send('Hello, choose you player terran John or zerg Zergy. Type \'termove\' - for ' +
        'John move or \'terfight\' for fighting and \'zermove\' or \'zerfight\' same actions for Zergy');
    });

    gameRouter.get('/termove', function (req, res, next) {

        john.move(john.lastPlace.x, john.lastPlace.y, function(err, result){
            if(err) {
                return res.status(200).send(err);
            }
            res.status(200).send({'You moved to':result});

        });

    });

    gameRouter.get('/terfight', function (req, res, next) {
        res.status(200).send(john.fight(zergy));
    });

    gameRouter.get('/zermove', function (req, res, next) {
        zergy.move(zergy.lastPlace.x, zergy.lastPlace.y, function(err, result){
            if(err) {
                return res.status(200).send(err);
            }
            res.status(200).send({'You moved to':result});

        });

    });

    gameRouter.get('/zerfight', function (req, res, next) {
        res.status(200).send(zergy.fight(john));
    });

   return gameRouter;

};
module.exports = customRouter;
