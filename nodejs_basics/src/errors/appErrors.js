class AppError extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
      this.name = this.constructor.name;
    }
  }
  
  class ValidationError extends AppError {
    constructor(message, details = null) {
      super(message, 400);
      this.details = details;
    }
  }
  
  class NotFoundError extends AppError {
    constructor(message) {
      super(message, 404);
    }
  }
  
  module.exports = {
    AppError,
    ValidationError,
    NotFoundError
  };
  