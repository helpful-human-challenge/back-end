import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import * as db from './db';
import { log } from './utils';

// Set Up
const app = express().use(bodyParser.json()).use(cors());
const router = express.Router();
const state = {
  isOn: false,
  http: null,
};

app.use('/api/v1', router);
// require routes here
// require('../route/route-color')(router);

// 404 Catch-All
app.all('*', (request, response) => {
  return response.status(404).send('PATH ERROR: 404 not found');
});

const server = module.exports = {};

// Start Server
server.start = () => {
  return new Promise((resolve, reject) => {
    if(state.isOn) return reject(new Error('USER ERROR: server is already on'));
    state.isOn = true;
    db.start()
      .then(() => {
        state.http = app.listen(process.env.PORT, () => {
          log('__SERVER_LISTENING_ON_PORT__', process.env.PORT);
          resolve();
        });
      })
      .catch(reject);
  });
};

// Stop Server
server.stop = () => {
  return new Promise((resolve, reject) => {
    if(!state.isOn) return reject(new Error('USER ERROR: server is already off'));
    return db,stop()
      .then(() => {
        state.http.close(() => {
          log('__SERVER_DOWN__');
          state.isOn = false;
          state.http = null;
          resolve();
        });
      })
      .catch(reject);
  });
};
