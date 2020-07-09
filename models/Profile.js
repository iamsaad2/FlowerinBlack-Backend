const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  flower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'flower',
  },
  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: 'fire',
  },
});

module.exports = mongoose.model('Profile', ProfileSchema);
