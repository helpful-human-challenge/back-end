'use strict';

import bodyParser from 'body-parser';

import Color from '../model/color';
import { log } from '../lib/utils';
import errorHandler from '../middleware/error-handler';

bodyParser = bodyParser.json();

module.exports = function(router) {
  router.route('/color/:_id?')
    .post((request, response) => {
      log('__ROUTE_POST_COLOR');
      // Model.insertMany(doc)
      // .then(send response)
      // .catch(errorHandler)
    })
    .get((request, response) => {
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
};
