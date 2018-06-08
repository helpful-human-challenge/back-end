'use strict';

const superagent = require('superagent');
const mocks = require('../lib/mocks');
const server = require('../../lib/server');
require('jest');


const PORT = process.env.PORT;
const COLOR_ENDPOINT = `:${PORT}/api/v1/color`;

describe('GET /api/v1/color', function() {
  beforeAll(() => server.start(PORT, () => console.log(`Listening on ${PORT}`)));
  afterAll(() => server.stop());
  afterAll(mocks.color.removeAll);

  describe('Valid Route', () => {
    it('should get color objects', () => {
      return mocks.color.createOne()
        .then(mockColor => this.mockColor = mockColor)
        .then(x => superagent.get(COLOR_ENDPOINT)
          .then(response => {
            expect(response.status).toEqual(200);
          }));
    });
    it('should get a single color', () => {
      let newMock;
      return mocks.color.createOne()
        .then(x => newMock = x)
        .then(() => {
          return superagent.get(`${COLOR_ENDPOINT}/${newMock.color._id}`)
            .then(response => {
              expect(response.status).toEqual(200);
            });
        });
    });
  });
  describe('Invalid Route', () => {
    it('should return 404 not found for invalid path', () => {
      return superagent.get(':4000/api/v1/colors')
        .catch(error => expect(error.status).toEqual(404));
    });
    it('should return 404 not found for invalid path', () => {
      return superagent.get(`${COLOR_ENDPOINT}/1234`)
        .catch(error => expect(error.status).toEqual(404));
    });
  });
});
