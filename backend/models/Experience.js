const mongoose = require('mongoose');

// Define the Experience schema
const experienceSchema = new mongoose.Schema({
  experiences: [
    {
      name: String,
      dateStart: { type: Date },
      dateEnd: { type: Date },
      roleName: String,
      points: [String]
    }
  ]
});

// Create the model based on the schema
const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
