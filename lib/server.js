'use strict';

// App Dependencies
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { log } = require('./utils');

// App Setup
const app = express();
const PORT = process.env.PORT;
const router = express.Router();
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use('/api/v1', router);
require('../route/route-color')(router);

// 404 Catch-All
app.all('*', (request, response) => {
  return response.status(404).send('PATH ERROR: route not found');
});

// Server Controls
const server = module.exports = {};
server.start = () => {
  return new Promise((resolve/*, reject*/) => {
    // if(server.isOn) return reject(new Error('Server Error, server is already running.'));
    server.http = app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
      server.isOn = true;
      mongoose.connect(MONGODB_URI);
      return resolve(server);
    });
  });
};

server.stop = () => {
  return new Promise((resolve/*, reject*/) => {
    // if(!server.isOn) return reject(new Error('Server Error, server was not running'));
    server.http.close(() => {
      server.isOn = false;
      mongoose.disconnect();
      return resolve();
    });
  });
};
