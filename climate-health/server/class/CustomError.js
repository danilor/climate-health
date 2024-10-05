const ERROR_NOT_FOUND = 404;

const CustomErrorCodes = {
  [ERROR_NOT_FOUND]: "Not Found",
};

class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = CustomErrorCodes[code] ? code : 500;
    this.message = message || "Unexpected Error";
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  CustomError,
  ERROR_NOT_FOUND,
};
