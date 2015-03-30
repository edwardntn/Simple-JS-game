
module.exports = function(app){
    console.log('---Simple game loaded successfully---');

    var gameRouter = require('./game')(app);

    app.get('/', function(req, res, next){
        res.status(200).send('Hello, for playing game you must type \'game\' in address bar');

    });


    app.use('/game', gameRouter);




};