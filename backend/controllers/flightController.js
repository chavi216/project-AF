import FlightData from '../models/Flightmodels.js';

export const saveData = async (req, res) => {
    try {
        const newData = new FlightData(req.body);
        await newData.save();
        res.status(201).json({ message: "Data Saved Successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getLatestData = async (req, res) => {
    try {
        const data = await FlightData.findOne().sort({ createdAt: -1 });
        res.json(data || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};