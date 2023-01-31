"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCompanyUseCase = void 0;
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
class DeleteCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const CompanyExists = yield this.companyRepository.findById(id);
            if (!CompanyExists)
                throw new ErrorsHandler_1.ErrorsHandler(`Company does not exist`, 400);
            yield this.companyRepository.delete(id);
        });
    }
}
exports.DeleteCompanyUseCase = DeleteCompanyUseCase;