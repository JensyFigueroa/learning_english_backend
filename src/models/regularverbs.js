const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verbSchema = new Schema({
  english: String,
  spanish: String,
});

// Creando el modelo
const Verbs = mongoose.model("regularverbs", verbSchema);

module.exports = Verbs;
