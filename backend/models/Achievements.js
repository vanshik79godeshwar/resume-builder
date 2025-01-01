const mongoose = require('mongoose');
const achievementsSchema = new mongoose.Schema({
    achievements: [String]
  });
  
  const Achievements = mongoose.model('Achievements', achievementsSchema);
  
 module.exports = Achievements;