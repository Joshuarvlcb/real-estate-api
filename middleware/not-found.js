const notFound = (req, res) => {
  if (req.url) {
    res.status(404).json({ message: "not found" });
  }
};
module.exports = notFound;
