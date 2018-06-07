import { log } from './utils';
import mongoose from 'mongoose';
mongoose.Promise = Promise;

const state = { isOn: false };

// Connect to MongoDB
export const start = () => {
  log('__DB_ON__', process.env.MONGO_URI);
  if(state.isOn) return Promise.reject(new Error('USER ERROR: database is already on'));
  state.isOn = true;
  return mongoose.connect(process.env.MONGO_URI);
};

// Disconnect from MongoDB
export const stop = () => {
  log('__DB_OFF__');
  if(!start.isOn) return Promise.reject(new Error('USER ERROR: database is already disconnected'));
  state.isOn = false;
  return mongoose.disconnect();
};
