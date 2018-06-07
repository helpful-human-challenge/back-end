'use strict';

const mongoose = require('mongoose');

const Color = mongoose.Schema({
  hex: {
    type: String,
  },
  rgb: {
    type: String,
  },
  colorRange: {
    type: String,
  },
});

module.exports = mongoose.model('color', Color);
