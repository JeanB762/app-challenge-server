"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoCompanyRepository_1 = require("../../repositories/implementations/MongoCompanyRepository");
const UpdateUserController_1 = require("./UpdateUserController");
const UpdateUserUseCase_1 = require("./UpdateUserUseCase");
exports.default = () => {
    const companyRepository = new MongoCompanyRepository_1.MongoCompanyRepository();
    const updateCompanyUseCase = new UpdateUserUseCase_1.UpdateCompanyUseCase(companyRepository);
    const updateCompanyController = new UpdateUserController_1.UpdateCompanyController(updateCompanyUseCase);
    return updateCompanyController;
};
