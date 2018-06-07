import mongoose from 'mongoose';

const Color = mongoose.Schema({
  hex: {
    type: String,
  },
  rgb: {
    type: String,
  },
  colorRange: {
    type: String,
  },
});

export default mongoose.model('color', Color);
