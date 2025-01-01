const mongoose = require('mongoose');
const positionsSchema = new mongoose.Schema({
    responsibilities: [String]
  });
  
  const Positions = mongoose.model('Positions', positionsSchema);

module.exports = Positions;