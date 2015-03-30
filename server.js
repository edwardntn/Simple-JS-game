var express = require('express');
var app = express();
var loger = require('morgan');


require('./routers/index.js')(app);


app.listen(3030, function(){
    console.log("---Express start success!---");
});