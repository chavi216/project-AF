import express from 'express';
import { saveData, getLatestData } from '../controllers/flightController.js';
import validate from '../middleware/validateFlight.js';

const router = express.Router();

router.post('/', validate, saveData);
router.get('/', getLatestData);

export default router;