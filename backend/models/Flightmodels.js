import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  altitude: { type: Number, min: 0, max: 3000, required: true },
  hsi: { type: Number, min: 0, max: 360, required: true },
  adi: { type: Number, min: 0, max: 100, required: true }
}, { timestamps: true });

export default mongoose.model('FlightData', flightSchema);