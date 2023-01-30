"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUserRepository_1 = require("../../repositories/implementations/MongoUserRepository");
const CreateUserController_1 = require("./CreateUserController");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
exports.default = () => {
    const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
    const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepository);
    const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
    return createUserController;
};
