var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var UtilisateurSchema = new Schema({
    nom: String,
    email: String,
    mdp: String
});

// Compile model from schema
var Utilisateur = mongoose.model('Utilisateur', UtilisateurSchema );
