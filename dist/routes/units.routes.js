"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitsRoutes = void 0;
const express_1 = require("express");
const createUnit_1 = __importDefault(require("../modules/unity/useCases/createUnit"));
const updateUnit_1 = __importDefault(require("../modules/unity/useCases/updateUnit"));
const listUnits_1 = __importDefault(require("../modules/unity/useCases/listUnits"));
const findUnit_1 = __importDefault(require("../modules/unity/useCases/findUnit"));
const deleteUnit_1 = __importDefault(require("../modules/unity/useCases/deleteUnit"));
const ensureAuth_1 = require("../middlewares/ensureAuth");
exports.unitsRoutes = (0, express_1.Router)();
exports.unitsRoutes.use(ensureAuth_1.ensureAuthentication);
exports.unitsRoutes.get('/', (request, response) => {
    return (0, listUnits_1.default)().handle(request, response);
});
exports.unitsRoutes.get('/:id', (request, response) => {
    return (0, findUnit_1.default)().handle(request, response);
});
exports.unitsRoutes.post('/', (request, response) => {
    return (0, createUnit_1.default)().handle(request, response);
});
exports.unitsRoutes.put('/:id', (request, response) => {
    return (0, updateUnit_1.default)().handle(request, response);
});
exports.unitsRoutes.delete('/:id', (request, response) => {
    return (0, deleteUnit_1.default)().handle(request, response);
});
