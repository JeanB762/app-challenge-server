"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUnitRepository_1 = require("../../repositories/implementations/MongoUnitRepository");
const DeleteUnitUseCase_1 = require("./DeleteUnitUseCase");
const DeleteUnitController_1 = require("./DeleteUnitController");
exports.default = () => {
    const unitsRepository = new MongoUnitRepository_1.MongoUnitRepository();
    const deleteUnitUseCase = new DeleteUnitUseCase_1.DeleteUnitUseCase(unitsRepository);
    const deleteUnitController = new DeleteUnitController_1.DeleteUnitController(deleteUnitUseCase);
    return deleteUnitController;
};
