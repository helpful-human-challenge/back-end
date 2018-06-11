'use strict';

const bodyParser = require('body-parser').json();

const Color = require('../model/color');
const { log } = require('../lib/utils');
const errorHandler = require('../middleware/error-handler');
const colors = require('../lib/colors');

module.exports = function(router) {
  router.route('/range/:color?')
    .get((request, response) => {
      log('__ROUTE_GET_RANGE__');
      if(request.params.color) {
        return Color.find({
          colorRange: request.params.color,
        })
          .then(colors => response.status(200).json(colors))
          .catch(error => errorHandler(error, response));
      }
    });
};
