const mongoose = require('mongoose');

// Define the Introduction schema
const introductionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  degree: { type: String, enum: ['BTech', 'MSc', 'Integrated'], required: true },
  course: { type: String, required: true },
  institute: { type: String, default: 'National Institute of Technology, Surat' },
  phone: { type: String, required: true },
  instituteMail: { type: String, required: true },
  linkedIn: { type: String, required: true },
  gitHub: { type: String },
  profileLink: { type: String },
  portfolioLink: { type: String }
});

// Create the model based on the schema
const Introduction = mongoose.model('Introduction', introductionSchema);

module.exports = Introduction;
