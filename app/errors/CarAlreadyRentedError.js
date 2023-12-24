const ApplicationError = require("./ApplicationError");

class CarAlreadyRentedError extends ApplicationError {
  constructor(car) {
    super(`${car.name} sudah terental`);
  }

  get details() {
    return { car }
  }
}

module.exports = CarAlreadyRentedError;
