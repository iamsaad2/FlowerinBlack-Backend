const mongoose = require('mongoose');

const ManagerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('manager', ManagerSchema);
