const ApplicationError = require('./ApplicationError');

class WrongPasswordError extends ApplicationError {
  constructor() {
    super('Password Salah');
  }
}

module.exports = WrongPasswordError;
