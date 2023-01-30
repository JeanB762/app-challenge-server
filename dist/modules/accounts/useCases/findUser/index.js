"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUserRepository_1 = require("../../repositories/implementations/MongoUserRepository");
const FindUserUseCase_1 = require("./FindUserUseCase");
const FindUserController_1 = require("./FindUserController");
exports.default = () => {
    const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
    const findUserUseCase = new FindUserUseCase_1.FindUserUseCase(usersRepository);
    const findUserController = new FindUserController_1.FindUserController(findUserUseCase);
    return findUserController;
};
