"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoAssetsRepository_1 = require("../../repositories/implementations/MongoAssetsRepository");
const ListAssetsController_1 = require("./ListAssetsController");
const ListAssetsUseCase_1 = require("./ListAssetsUseCase");
exports.default = () => {
    const assetsRepository = new MongoAssetsRepository_1.MongoAssetRepository();
    const listAssetsUseCase = new ListAssetsUseCase_1.ListAssetsUseCase(assetsRepository);
    const listAssetsController = new ListAssetsController_1.ListAssetsController(listAssetsUseCase);
    return listAssetsController;
};
