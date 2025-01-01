const mongoose = require('mongoose');
const skillsSchema = new mongoose.Schema({
    skills: [
      { heading: String, content: String }
    ],
    coreSubjects: { type: [String] }
  });
  
  const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;
  