"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUnitRepository_1 = require("../../repositories/implementations/MongoUnitRepository");
const UpdateUnitController_1 = require("./UpdateUnitController");
const UpdatUnitUseCase_1 = require("./UpdatUnitUseCase");
exports.default = () => {
    const unitRepository = new MongoUnitRepository_1.MongoUnitRepository();
    const updateUnitUseCase = new UpdatUnitUseCase_1.UpdateUnitUseCase(unitRepository);
    const updateUnitController = new UpdateUnitController_1.UpdateUnitController(updateUnitUseCase);
    return updateUnitController;
};
