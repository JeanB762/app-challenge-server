"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUserRepository_1 = require("../../repositories/implementations/MongoUserRepository");
const AuthenticateUserController_1 = require("./AuthenticateUserController");
const AuthenticateUserUseCase_1 = require("./AuthenticateUserUseCase");
exports.default = () => {
    const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
    const authenticateUserUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase(usersRepository);
    const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController(authenticateUserUseCase);
    return authenticateUserController;
};
