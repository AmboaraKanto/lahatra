var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

export var VideoSchema = new Schema({
    id: String,
    titre: String,
    artiste: String,
    date: Date,
    description: String
});

module.exports = mongoose.model('Video', VideoSchema);

// Compile model from schema
// var Video = mongoose.model('Video', VideoSchema);

