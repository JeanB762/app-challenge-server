"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetsRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("../config/upload"));
// import { ensureAuthentication } from '../middlewares/ensureAuth';
const createAsset_1 = __importDefault(require("../modules/asset/useCases/createAsset"));
const listAssets_1 = __importDefault(require("../modules/asset/useCases/listAssets"));
const findAsset_1 = __importDefault(require("../modules/asset/useCases/findAsset"));
const updateAsset_1 = __importDefault(require("../modules/asset/useCases/updateAsset"));
const deleteAsset_1 = __importDefault(require("../modules/asset/useCases/deleteAsset"));
const ensureAuth_1 = require("../middlewares/ensureAuth");
exports.assetsRoutes = (0, express_1.Router)();
const uploadAssetImage = (0, multer_1.default)(upload_1.default.upload('./uploads/assetsPictures'));
exports.assetsRoutes.use(ensureAuth_1.ensureAuthentication);
exports.assetsRoutes.get('/', (request, response) => {
    return (0, listAssets_1.default)().handle(request, response);
});
exports.assetsRoutes.get('/:id', (request, response) => {
    return (0, findAsset_1.default)().handle(request, response);
});
exports.assetsRoutes.post('/', uploadAssetImage.single('image'), (request, response) => {
    return (0, createAsset_1.default)().handle(request, response);
});
exports.assetsRoutes.put('/:id', uploadAssetImage.single('image'), (request, response) => {
    return (0, updateAsset_1.default)().handle(request, response);
});
exports.assetsRoutes.delete('/:id', (request, response) => {
    return (0, deleteAsset_1.default)().handle(request, response);
});
