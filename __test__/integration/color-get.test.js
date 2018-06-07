'use strict';

const superagent = require('superagent');
require('jest');

const mocks = require('../lib/mocks');
const server = require('../../lib/server');

const PORT = process.env.PORT;
const COLOR_ENDPOINT = `:${PORT}/api/v1/color`;

describe('GET /api/v1/color', function() {
  beforeAll(() => server.start(PORT, () => console.log(`Listening on ${PORT}`)));
  afterAll(() => server.stop());
  afterAll(mocks.color.removeAll);

  describe('Valid Route', () => {
    it('should get color objects', () => {
      return mocks.color.createOne()
        .then(color => this.mockColor = color)
        .then(() => {
          superagent.get(`${COLOR_ENDPOINT}`)
            .then(response => {
              expect(response.status).toEqual(200);
              console.log(response);
            });
        });
    });
  });
});
