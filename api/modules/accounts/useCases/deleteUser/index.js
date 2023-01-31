"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUserRepository_1 = require("../../repositories/implementations/MongoUserRepository");
const DeleteUserUseCase_1 = require("./DeleteUserUseCase");
const DeleteUserController_1 = require("./DeleteUserController");
exports.default = () => {
    const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
    const deleteUserUseCase = new DeleteUserUseCase_1.DeleteUserUseCase(usersRepository);
    const deleteUserController = new DeleteUserController_1.DeleteUserController(deleteUserUseCase);
    return deleteUserController;
};
