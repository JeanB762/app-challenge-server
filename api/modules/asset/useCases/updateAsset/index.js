"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoAssetsRepository_1 = require("../../repositories/implementations/MongoAssetsRepository");
const UpdateAssetController_1 = require("./UpdateAssetController");
const UpdatAssetUseCase_1 = require("./UpdatAssetUseCase");
exports.default = () => {
    const assetRepository = new MongoAssetsRepository_1.MongoAssetRepository();
    const updateAssetUseCase = new UpdatAssetUseCase_1.UpdateAssetUseCase(assetRepository);
    const updateAssetController = new UpdateAssetController_1.UpdateAssetController(updateAssetUseCase);
    return updateAssetController;
};
