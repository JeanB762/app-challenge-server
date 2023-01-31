"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const ensureAuth_1 = require("../middlewares/ensureAuth");
const upload_1 = __importDefault(require("../config/upload"));
const createUser_1 = __importDefault(require("../modules/accounts/useCases/createUser"));
const updateUser_1 = __importDefault(require("../modules/accounts/useCases/updateUser"));
const listUsers_1 = __importDefault(require("../modules/accounts/useCases/listUsers"));
const findUser_1 = __importDefault(require("../modules/accounts/useCases/findUser"));
const deleteUser_1 = __importDefault(require("../modules/accounts/useCases/deleteUser"));
exports.usersRoutes = (0, express_1.Router)();
const uploadAvatar = (0, multer_1.default)(upload_1.default.upload('./uploads/avatar'));
exports.usersRoutes.post('/', uploadAvatar.single('avatar'), (request, response) => {
    return (0, createUser_1.default)().handle(request, response);
});
exports.usersRoutes.use(ensureAuth_1.ensureAuthentication);
exports.usersRoutes.get('/', (request, response) => {
    return (0, listUsers_1.default)().handle(request, response);
});
exports.usersRoutes.get('/:id', (request, response) => {
    return (0, findUser_1.default)().handle(request, response);
});
exports.usersRoutes.put('/:id', uploadAvatar.single('avatar'), (request, response) => {
    return (0, updateUser_1.default)().handle(request, response);
});
exports.usersRoutes.delete('/:id', (request, response) => {
    return (0, deleteUser_1.default)().handle(request, response);
});
