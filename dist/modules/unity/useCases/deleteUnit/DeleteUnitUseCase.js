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
exports.DeleteUnitUseCase = void 0;
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
class DeleteUnitUseCase {
    constructor(unitRepository) {
        this.unitRepository = unitRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const UnitExists = yield this.unitRepository.findById(id);
            if (!UnitExists)
                throw new ErrorsHandler_1.ErrorsHandler(`Unit does not exist`, 400);
            yield this.unitRepository.delete(id);
        });
    }
}
exports.DeleteUnitUseCase = DeleteUnitUseCase;
