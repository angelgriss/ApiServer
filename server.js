var express = require('express');
var https = require('https');

var app = express();

app.get('/states', function (req, res) {

    var options = {
        host: 'api.mercadolibre.com',
        port: 443,
        path: '/classified_locations/countries/BR',
     };

    request = https.get(options, function(res1){
        var body = "";
        res1.on('data', function(data) {
           body += data;
        });
        res1.on('end', function() {
           var jsonContent = JSON.parse(body);
           
           var rtdo=JSON.stringify(jsonContent.states);

           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Content-Type','application/json');
           
           res.end(rtdo);
        })
        res1.on('error', function(e) {
           onsole.log("Got error: " + e.message);
        });
    });
 });

 app.get('/cities/:id', function (req, res) {

    var par=req.params.id;

    var optionscities = {
        host: 'api.mercadolibre.com',
        port: 443,
        path: '/classified_locations/states/'+par,
     };


    request = https.get(optionscities, function(res1){
        var body = "";

        res1.on('data', function(data) {
           body += data;
        });
        res1.on('end', function() {
           var jsonContent = JSON.parse(body);
           var rtdo=JSON.stringify(jsonContent.cities);

           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Content-Type','application/json');

           res.end(rtdo);
        })
        res1.on('error', function(e) {
           onsole.log("Got error: " + e.message);
        });
    });
 });


 app.get('/neighborhoods/:id', function (req, res) {

    var par=req.params.id;

    var optionsneighborhoods = {
        host: 'api.mercadolibre.com',
        port: 443,
        path: '/classified_locations/cities/'+par,
     };


    request = https.get(optionsneighborhoods, function(res1){
        var body = "";

        res1.on('data', function(data) {
           body += data;
        });
        res1.on('end', function() {
           var jsonContent = JSON.parse(body);
           var rtdo=JSON.stringify(jsonContent.neighborhoods);

           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Content-Type','application/json');
           res.end(rtdo);
        })
        res1.on('error', function(e) {
           onsole.log("Got error: " + e.message);
        });
    });
 });

var server = app.listen(8081, function () {

  var host = "localhost";
  var port = "8081";

  console.log("Escuchando en http://%s:%s", host, port);

});