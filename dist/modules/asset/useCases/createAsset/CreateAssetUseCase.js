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
exports.CreateAssetUseCase = void 0;
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
class CreateAssetUseCase {
    constructor(assetRepository) {
        this.assetRepository = assetRepository;
    }
    execute({ name, description, model, owner, status, healthlevel, image, companyId, responsibles, unitId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const assetAlreadyExists = yield this.assetRepository.findByName(name);
            if (assetAlreadyExists)
                throw new ErrorsHandler_1.ErrorsHandler('Asset already exists', 400);
            yield this.assetRepository.create({
                name,
                description,
                model,
                owner,
                status,
                healthlevel,
                image,
                companyId,
                responsibles,
                unitId,
            });
        });
    }
}
exports.CreateAssetUseCase = CreateAssetUseCase;
