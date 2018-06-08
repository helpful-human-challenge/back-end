'use strict';

const utils = module.exports = {};

utils.log = (...args) =>
  process.env.DEBUG === 'true' ? console.log(...args) : null;
