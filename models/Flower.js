const mongoose = require('mongoose');

const FlowerSchema = mongoose.Schema({
  name: {
    type: String,
  },

  water: {
    type: String,
  },

  winfo: {
    type: String,
  },

  earth: {
    type: String,
  },

  einfo: {
    type: String,
  },

  earth2: {
    type: String,
  },

  einfo2: {
    type: String,
  },

  air: {
    type: String,
  },

  ainfo: {
    type: String,
  },

  air2: {
    type: String,
  },

  ainfo2: {
    type: String,
  },

  air3: {
    type: String,
  },

  ainfo3: {
    type: String,
  },
  air4: {
    type: String,
  },

  ainfo4: {
    type: String,
  },

  fire: {
    type: String,
  },

  finfo: {
    type: String,
  },

  fire2: {
    type: String,
  },

  finfo2: {
    type: String,
  },

  fire3: {
    type: String,
  },

  finfo3: {
    type: String,
  },

  fire4: {
    type: String,
  },

  finfo4: {
    type: String,
  },

  fire5: {
    type: String,
  },

  finfo5: {
    type: String,
  },

  fire6: {
    type: String,
  },

  finfo6: {
    type: String,
  },
  fire7: {
    type: String,
  },
  finfo7: {
    type: String,
  },
  fire8: {
    type: String,
  },
  finfo8: {
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
