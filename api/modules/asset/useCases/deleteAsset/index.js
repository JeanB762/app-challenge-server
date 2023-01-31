"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoAssetsRepository_1 = require("../../repositories/implementations/MongoAssetsRepository");
const DeleteAssetUseCase_1 = require("./DeleteAssetUseCase");
const DeleteAssetController_1 = require("./DeleteAssetController");
exports.default = () => {
    const assetsRepository = new MongoAssetsRepository_1.MongoAssetRepository();
    const deleteAssetUseCase = new DeleteAssetUseCase_1.DeleteAssetUseCase(assetsRepository);
    const deleteAssetController = new DeleteAssetController_1.DeleteAssetController(deleteAssetUseCase);
    return deleteAssetController;
};
