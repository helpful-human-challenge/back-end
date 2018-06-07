'use strict';

const Color = require('../../model/color');
require('jest');

describe('Color Model', function() {
  let newColor = new Color();
  describe('Color Schema', () => {
    it('should create an object', () => {
      expect(newColor).toBeInstanceOf(Object);
    });
    it('Should have a hex property', () => {
      expect(newColor).toHaveProperty('hex');
    });
  });
});
