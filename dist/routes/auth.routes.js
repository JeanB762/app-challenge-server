"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const authenticateUser_1 = __importDefault(require("../modules/accounts/useCases/authenticateUser"));
exports.authRoutes = (0, express_1.Router)();
exports.authRoutes.post('/login', (request, response) => {
    return (0, authenticateUser_1.default)().handle(request, response);
});
