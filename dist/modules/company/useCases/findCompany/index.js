"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoCompanyRepository_1 = require("../../repositories/implementations/MongoCompanyRepository");
const FindCompanyUseCase_1 = require("./FindCompanyUseCase");
const FindCompanyController_1 = require("./FindCompanyController");
exports.default = () => {
    const companyRepository = new MongoCompanyRepository_1.MongoCompanyRepository();
    const findCompanyUseCase = new FindCompanyUseCase_1.FindCompanyUseCase(companyRepository);
    const findCompanyController = new FindCompanyController_1.FindCompanyController(findCompanyUseCase);
    return findCompanyController;
};
