exports.notFoundHandler = (req, res, next) => {
    res.json({ message: "Not Found" });
};
