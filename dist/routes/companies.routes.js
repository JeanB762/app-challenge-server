"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companiesRoutes = void 0;
const express_1 = require("express");
const createCompany_1 = __importDefault(require("../modules/company/useCases/createCompany"));
const updateCompany_1 = __importDefault(require("../modules/company/useCases/updateCompany"));
const listCompanies_1 = __importDefault(require("../modules/company/useCases/listCompanies"));
const findCompany_1 = __importDefault(require("../modules/company/useCases/findCompany"));
const deleteCompany_1 = __importDefault(require("../modules/company/useCases/deleteCompany"));
const ensureAuth_1 = require("../middlewares/ensureAuth");
exports.companiesRoutes = (0, express_1.Router)();
exports.companiesRoutes.use(ensureAuth_1.ensureAuthentication);
exports.companiesRoutes.get('/', (request, response) => {
    return (0, listCompanies_1.default)().handle(request, response);
});
exports.companiesRoutes.get('/:id', (request, response) => {
    return (0, findCompany_1.default)().handle(request, response);
});
exports.companiesRoutes.post('/', (request, response) => {
    return (0, createCompany_1.default)().handle(request, response);
});
exports.companiesRoutes.put('/:id', (request, response) => {
    return (0, updateCompany_1.default)().handle(request, response);
});
exports.companiesRoutes.delete('/:id', (request, response) => {
    return (0, deleteCompany_1.default)().handle(request, response);
});
