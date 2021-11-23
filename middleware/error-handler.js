const errorHandler = (req, res) => {
  res.send("hello from middleware");
};
module.exports = errorHandler;
