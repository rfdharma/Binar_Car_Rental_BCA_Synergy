const ApplicationError = require("./ApplicationError");

class InsufficientAccessError extends ApplicationError {
  constructor(role) {
    super("Akses Ditolak");
    this.role = role;
  }

  get details() {
    return {
      role: this.role,
      reason: `${this.role} tidak diizinkan`
    }
  }
}

module.exports = InsufficientAccessError;
