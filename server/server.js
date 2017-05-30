'use strict'
//on require les dependance et on require les fichier
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    notes = require("/home/apprenti/Documents/WCS/CHECKPOINT2/subject/mocks/notes.json"),
    users = require("/home/apprenti/Documents/WCS/CHECKPOINT2/subject/mocks/users.json");


app.use(express.static('../public'));


//routes

app.get('/', function(req, res) {
    res.send("index.html")
});

app.get('/user', function(req, res) {
    var result = [];

    result.push(notes, users)
    res.json(result);

});



//

//server listen

app.listen(9000, function() {
    console.log('Zergling ships to port 9000!')
})

//;