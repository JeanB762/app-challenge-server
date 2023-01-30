"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoAssetsRepository_1 = require("../../repositories/implementations/MongoAssetsRepository");
const FindAssetUseCase_1 = require("./FindAssetUseCase");
const FindAssetController_1 = require("./FindAssetController");
exports.default = () => {
    const assetRepository = new MongoAssetsRepository_1.MongoAssetRepository();
    const findAssetUseCase = new FindAssetUseCase_1.FindAssetUseCase(assetRepository);
    const findAssetController = new FindAssetController_1.FindAssetController(findAssetUseCase);
    return findAssetController;
};
