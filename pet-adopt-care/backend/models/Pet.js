const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    gender: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Pet', PetSchema);
