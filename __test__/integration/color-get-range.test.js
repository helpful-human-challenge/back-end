'use strict';

const superagent = require('superagent');
const mocks = require('../lib/mocks');
const server = require('../../lib/server');
require('jest');


const PORT = process.env.PORT;
const RANGE_ENDPOINT = `:${PORT}/api/v1/range`;

describe('GET RANGE', function() {
  beforeAll(() => server.start(PORT, () => console.log(`Listening on ${PORT}`)));
  afterAll(() => server.stop());
  afterAll(mocks.color.removeAll);
  describe('Valid Route', () => {
    it('should get color in range', () => {
      let mockRange;
      return mocks.color.createOne()
        .then(x => mockRange = x)
        .then(() => {
          return superagent.get(`${RANGE_ENDPOINT}/${mockRange.color.colorRange}`)
            .then(response => {
              expect(response.status).toEqual(200);
            });
        });
    });
  });
  describe('Invalid Route', () => {
    it('should return 404 not found', () => {
      return superagent.get(`${RANGE_ENDPOINT}/notacolor`)
        .catch(error => expect(error.status).toEqual(404));
    });
  });
});
