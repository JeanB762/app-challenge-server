"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUserRepository_1 = require("../../repositories/implementations/MongoUserRepository");
const UpdateUserController_1 = require("./UpdateUserController");
const UpdateUserUseCase_1 = require("./UpdateUserUseCase");
exports.default = () => {
    const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
    const updateUserUseCase = new UpdateUserUseCase_1.UpdateUserUseCase(usersRepository);
    const updateUserController = new UpdateUserController_1.UpdateUserController(updateUserUseCase);
    return updateUserController;
};
