const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    projects: [
      {
        projectName: String,
        toolsUsed: [String],
        projectDate: { type: Date },
        projectRepoLink: { type: String },
        points: [String]
      }
    ]
  });
  
  const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;