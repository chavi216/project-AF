export default (req, res, next) => {
    const { altitude, hsi, adi } = req.body;

    if (altitude === undefined || hsi === undefined || adi === undefined) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    if (typeof altitude !== 'number' || altitude < 0 || altitude > 3000) {
        return res.status(400).json({ message: "Altitude must be a number between 0 and 3000" });
    }

    if (typeof hsi !== 'number' || hsi < 0 || hsi > 360) {
        return res.status(400).json({ message: "HSI must be a number between 0 and 360" });
    }

    if (typeof adi !== 'number' || adi < -100 || adi > 100) {
        return res.status(400).json({ message: "ADI must be a number between -100 and 100" });
    }

    next();
};
