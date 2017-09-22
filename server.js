// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.json())

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, '/public/dist'))); //@@@@@@@

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/team');
mongoose.Promise = global.Promise;

var PlayerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    position: {type: String},
    status1: {type: String},
    status2: {type: String},
    status3: {type: String},

}, {timestamps: true });
mongoose.model('Player', PlayerSchema);
var Player = mongoose.model('Player');

// Routes

// Creates a new player.
app.post('/create', (req, res, next) => {
    new Player(req.body).save((err) => {
        if(err) {
            console.log("Error encountered", err);
        }
    })
});

// Returns all of the players.
app.get('/getPlayers', (req, res, next) => {
    Player.find({}, (err, players) => {
        if(err) {
            console.log("Error encountered", err);
        }else {
            res.json(players);
        }
    });
});

app.post('/deletePlayer', (req, res, next) => {
    Player.remove({_id: req.body._id}, (err) => {
        if(err) {
            console.log("Error encountered", err);
        }
    });
});

app.post('/changePlay', (req, res, next) => {
    if(req.headers.game == 1) {
        Player.update({_id: req.body._id}, {status1: 'playing'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }else if(req.headers.game == 2) {
        Player.update({_id: req.body._id}, {status2: 'playing'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }else {
        Player.update({_id: req.body._id}, {status3: 'playing'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }
});

app.post('/changeNot', (req, res, next) => {
    if(req.headers.game == 1) {
        Player.update({_id: req.body._id}, {status1: 'notPlaying'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }else if(req.headers.game == 2) {
        Player.update({_id: req.body._id}, {status2: 'notPlaying'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }else {
        Player.update({_id: req.body._id}, {status3: 'notPlaying'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }
});

app.post('/changeUndecided', (req, res, next) => {
    if(req.headers.game == 1) {
        Player.update({_id: req.body._id}, {status1: 'undecided'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }else if(req.headers.game == 2) {
        Player.update({_id: req.body._id}, {status2: 'undecided'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }else {
        Player.update({_id: req.body._id}, {status3: 'undecided'}, function(err) {
            if(err) {
                console.log("Error encountered", err);
            }else {
                res.json();
            }
        });
    }
});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
    