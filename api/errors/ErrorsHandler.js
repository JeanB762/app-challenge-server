"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsHandler = void 0;
class ErrorsHandler {
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.ErrorsHandler = ErrorsHandler;
