"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoCompanyRepository_1 = require("../../repositories/implementations/MongoCompanyRepository");
const ListCompaniesUseCase_1 = require("./ListCompaniesUseCase");
const ListCompaniesController_1 = require("./ListCompaniesController");
exports.default = () => {
    const companiesRepository = new MongoCompanyRepository_1.MongoCompanyRepository();
    const listCompaniesUseCase = new ListCompaniesUseCase_1.ListCompaniesUseCase(companiesRepository);
    const listCompaniesController = new ListCompaniesController_1.ListCompaniesController(listCompaniesUseCase);
    return listCompaniesController;
};
