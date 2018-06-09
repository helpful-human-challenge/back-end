'use strict';

const bodyParser = require('body-parser').json();

const Color = require('../model/color');
const { log } = require('../lib/utils');
const errorHandler = require('../middleware/error-handler');

module.exports = function(router) {
  router.route('/color/:_id?')
    .post(bodyParser, (request, response) => {
      log('__ROUTE_POST_COLOR__');
      return new Color(request.body).save()
        .then(createdColor => response.status(201).json(createdColor))
        .catch(error => errorHandler(error, response));
    })
    .get((request, response) => {
      log('__ROUTE_GET_COLOR__');
      if(request.params._id) {
        return Color.findById(request.params._id)
          .then(color => response.status(200).json(color))
          .catch(error => errorHandler(error, response));
      }
      return Color.find()
        .then(colors => {
          // do something with color objects for pagination here
          response.status(200).json(colors);
        })
        .catch(error => errorHandler(error, response));
    });
  router.route('/color/:range?')
    .get((request, response) => {
      if(request.params.range) {
        return Color.find({
          colorRange: request.params.range,
        })
          .then(colors => response.status(200).json(colors))
          .catch(error => errorHandler(error, response));
      }
    });
};
