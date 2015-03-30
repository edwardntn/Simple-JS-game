var express = require('express');

var customRouter = function () {

    var userRouter = express.Router();





    userRouter.get('/', function (req, res, next) {

        res.status(200).send({success: "user get"});
    });


    userRouter.post('/', function (req, res, next) {
        var data = req.body;
        res.status(200).send({success: 'Success'});

    });






    return userRouter;

};
module.exports = customRouter;
