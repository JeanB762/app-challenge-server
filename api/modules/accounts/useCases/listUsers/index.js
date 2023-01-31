"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUserRepository_1 = require("../../repositories/implementations/MongoUserRepository");
const ListUsersUseCase_1 = require("./ListUsersUseCase");
const ListUsersController_1 = require("./ListUsersController");
exports.default = () => {
    const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
    const listUsersUseCase = new ListUsersUseCase_1.ListUsersUseCase(usersRepository);
    const listUsersController = new ListUsersController_1.ListUsersController(listUsersUseCase);
    return listUsersController;
};
