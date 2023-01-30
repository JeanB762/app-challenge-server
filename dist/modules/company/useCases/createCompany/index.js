"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoCompanyRepository_1 = require("../../repositories/implementations/MongoCompanyRepository");
const CreateCompanyController_1 = require("./CreateCompanyController");
const CreateCompanyUseCase_1 = require("./CreateCompanyUseCase");
exports.default = () => {
    const CompanyRepository = new MongoCompanyRepository_1.MongoCompanyRepository();
    const createCompanyUseCase = new CreateCompanyUseCase_1.CreateCompanyUseCase(CompanyRepository);
    const createCompanyController = new CreateCompanyController_1.CreateCompanyController(createCompanyUseCase);
    return createCompanyController;
};
