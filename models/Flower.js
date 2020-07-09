const mongoose = require('mongoose');

const FlowerSchema = mongoose.Schema({
  name: {
    type: String,
  },

  water: {
    type: String,
  },

  earth: {
    type: String,
  },

  earth2: {
    type: String,
  },

  air: {
    type: String,
  },
  air2: {
    type: String,
  },

  air3: {
    type: String,
  },
  air4: {
    type: String,
  },

  fire: {
    type: String,
  },

  fire2: {
    type: String,
  },
  fire3: {
    type: String,
  },
  fire4: {
    type: String,
  },
  fire5: {
    type: String,
  },
  fire6: {
    type: String,
  },
  fire7: {
    type: String,
  },
  fire8: {
    type: String,
  },

  time: {
    require: true,
    type: Date,
    default: Date.now,
  },

  date: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model('flower', FlowerSchema);
