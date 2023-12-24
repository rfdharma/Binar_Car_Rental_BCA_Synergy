const ApplicationError = require("./ApplicationError");

class RecordNotFoundError extends ApplicationError {
  constructor(name) {
    super(`${name} tidak ditemukan`)
  }
}

module.exports = RecordNotFoundError;
