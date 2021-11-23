const { statusCodes } = require("http-status-codes");
class CustomError extends Error {
  constructor(error) {
    super();
    err = statusCodes[error];
  }
}

module.exports = CustomError;
