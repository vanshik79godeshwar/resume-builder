const mongoose = require('mongoose');
const projectRootSchema = new mongoose.Schema({
    projectID: { type: String, unique: true, required: true },
    projectDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'Projects' }
  });
  
  const Project = mongoose.model('Project', projectRootSchema);

module.exports = Project;
  