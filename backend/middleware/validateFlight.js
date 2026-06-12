export default (req, res, next) => {
    const { altitude, hsi, adi } = req.body;
    if (altitude === undefined || hsi === undefined || adi === undefined) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    next();
};