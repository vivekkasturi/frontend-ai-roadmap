class ValidationError extends Error {
    constructor(error){
    super(error);

        this.status = 400
        this.message = "Name is required";
    }
}

class NotFoundError extends Error {
    constructor(error){
        super(error);
        this.status = 404
        this.message = "wrong data";
    }
}

export {ValidationError, NotFoundError}