const mongoose = require('mongoose');

// Define the Education schema
const educationSchema = new mongoose.Schema({
  cgpa: { type: Number, required: true },
  institute: { type: String, required: true },
  graduationYear: { type: Number, required: true }
});

// Create the model based on the schema
const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
