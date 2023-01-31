"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUserRepository_1 = require("../../repositories/implementations/MongoUserRepository");
const ChangeAvatarUserController_1 = require("./ChangeAvatarUserController");
const ChangeAvatarUserUseCase_1 = require("./ChangeAvatarUserUseCase");
exports.default = () => {
    const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
    const changeAvatarUserUseCase = new ChangeAvatarUserUseCase_1.ChangeAvatarUserUseCase(usersRepository);
    const changeAvatarUserController = new ChangeAvatarUserController_1.ChangeAvatarUserController(changeAvatarUserUseCase);
    return changeAvatarUserController;
};
