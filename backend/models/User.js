const mongoose = require('mongoose');
const Introduction = require('./Introduction');
const Education = require('./Education');
const Skills = require('./Skills');
const Experience = require('./Experience');
const Projects = require('./Projects');
const Achievements = require('./Achievements');
const Positions = require('./Positions');

// Define the User schema (root collection)
const userSchema = new mongoose.Schema({
  userID: { type: String, unique: true, required: true },
  introduction: { type: mongoose.Schema.Types.ObjectId, ref: 'Introduction' },
  education: { type: mongoose.Schema.Types.ObjectId, ref: 'Education' },
  skills: { type: mongoose.Schema.Types.ObjectId, ref: 'Skills' },
  experience: { type: mongoose.Schema.Types.ObjectId, ref: 'Experience' },
  projects: { type: mongoose.Schema.Types.ObjectId, ref: 'Projects' },
  achievements: { type: mongoose.Schema.Types.ObjectId, ref: 'Achievements' },
  positions: { type: mongoose.Schema.Types.ObjectId, ref: 'Positions' }
});

// Create the model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
