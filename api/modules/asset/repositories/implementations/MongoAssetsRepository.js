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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAssetRepository = void 0;
const AssetSchema_1 = __importDefault(require("../../../../database/schemas/AssetSchema"));
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
class MongoAssetRepository {
    create({ name, description, healthlevel, image, model, owner, status, companyId, responsibles, unitId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AssetSchema_1.default.create({
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
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`Asset creation error - ${error}`, 500);
            }
        });
    }
    update({ id, name, description, healthlevel, image, model, owner, status, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AssetSchema_1.default.findOneAndUpdate({ _id: id }, {
                    id,
                    name,
                    description,
                    healthlevel,
                    image,
                    model,
                    owner,
                    status,
                });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`Asset update error - ${error}`, 500);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = yield AssetSchema_1.default.findOne({ _id: id });
            return asset;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = yield AssetSchema_1.default.findOne({ name });
            return asset;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const assets = yield AssetSchema_1.default.find();
            return assets;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AssetSchema_1.default.findOneAndDelete({ _id: id });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`Asset delete error - ${error}`, 500);
            }
        });
    }
}
exports.MongoAssetRepository = MongoAssetRepository;
