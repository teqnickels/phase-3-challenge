var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.json())

app.get('/', function(request, response){
    response.send('MADE IT HERE')
});

app.listen(3000, function() {
    console.log('On Port 3000')
});