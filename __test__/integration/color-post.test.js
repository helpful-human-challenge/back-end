'use strict';

const superagent = require('superagent');
const mocks = require('../lib/mocks');
const server = require('../../lib/server');
require('jest');

const PORT = process.env.PORT;
const COLOR_ENDPOINT = `:${PORT}/api/v1/color`;

describe('POST api/v1/color', function() {
  beforeAll(() => server.start(PORT, () => console.log(`Listening on ${PORT}`)));
  afterAll(() => server.stop());
  afterAll(mocks.color.removeAll);
  describe('Valid route', () => {
    const color = {
      hex: '#00D2FF',
      rgb: '0 210 255',
      colorRange: 'blue',
    };
    it('should post a color object to the database', () => {
      return superagent.post(`${COLOR_ENDPOINT}`)
        .send(color)
        .then(response => {
          expect(response.status).toEqual(201);
        });
    });
  });
  describe('Invalid route', () => {
    it('should return 404 for invalid route', () => {
      return superagent.post(':4000/api/vi/colors')
        .catch(error => expect(error.status).toEqual(404));
    });
    it('should return 400 bad request', () => {
      return superagent.post(COLOR_ENDPOINT)
        .send({})
        .catch(error => expect(error.status).toEqual(400));
    });
  });
});
