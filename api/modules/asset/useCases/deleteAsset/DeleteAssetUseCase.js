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
exports.DeleteAssetUseCase = void 0;
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
class DeleteAssetUseCase {
    constructor(assetRepository) {
        this.assetRepository = assetRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const assetExists = yield this.assetRepository.findById(id);
            if (!assetExists)
                throw new ErrorsHandler_1.ErrorsHandler(`Asset does not exist`, 400);
            yield this.assetRepository.delete(id);
        });
    }
}
exports.DeleteAssetUseCase = DeleteAssetUseCase;
