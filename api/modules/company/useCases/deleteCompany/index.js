"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoCompanyRepository_1 = require("../../repositories/implementations/MongoCompanyRepository");
const DeleteCompanyUseCase_1 = require("./DeleteCompanyUseCase");
const DeleteCompanyController_1 = require("./DeleteCompanyController");
exports.default = () => {
    const companysRepository = new MongoCompanyRepository_1.MongoCompanyRepository();
    const deleteCompanyUseCase = new DeleteCompanyUseCase_1.DeleteCompanyUseCase(companysRepository);
    const deleteCompanyController = new DeleteCompanyController_1.DeleteCompanyController(deleteCompanyUseCase);
    return deleteCompanyController;
};
