const express = require("express");
const http = require("http");
const path = require("path");
var mongoose = require('mongoose');

const api = require("./server/routes/api");
const utilisateur = require("./server/models/utilisateur");
//const video = require("./server/models/video");

const app = express();

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/lahatra';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

const port = process.env.PORT || 3001;
app.set("port", port);

/*
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define schema
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
    id: String,
    titre: String,
    artiste: String,
    date: Date,
    description: String
});

// Compile model from schema
var Video = mongoose.model('Video', VideoSchema);
*/

const server = http.createServer(app);
server.listen(port, function() {
    console.log("Serveur lance")
    var vd = new Video();
    var q = vd.find();
    q.exec(function (err, res) {
        if (err) return handleError(err);
        console.log(res);
    });
} );
