'use strict';

const faker = require('faker');
const Color = require('../../model/color');

const mocks = module.exports = {};
mocks.color = {};
mocks.color.createOne = () => {
  let result = {};

  return new Color({
    hex: faker.hacker.noun(),
    rgb: faker.random.uuid(),
    colorRange: faker.random.word(),
  }).save()
    .then(color => {
      result.color = color;
      return result;
    });
};

mocks.color.removeAll = () => Promise.all([Color.remove()]);
