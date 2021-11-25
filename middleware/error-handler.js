const errorHandler = (req, res, next) => {
  // res.send("hello from middleware");'
  next();
};
module.exports = errorHandler;
