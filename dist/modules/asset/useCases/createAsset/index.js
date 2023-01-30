"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoAssetsRepository_1 = require("../../repositories/implementations/MongoAssetsRepository");
const CreateAssetController_1 = require("./CreateAssetController");
const CreateAssetUseCase_1 = require("./CreateAssetUseCase");
exports.default = () => {
    const assetsRepository = new MongoAssetsRepository_1.MongoAssetRepository();
    const createAssetUseCase = new CreateAssetUseCase_1.CreateAssetUseCase(assetsRepository);
    const createAssetController = new CreateAssetController_1.CreateAssetController(createAssetUseCase);
    return createAssetController;
};
