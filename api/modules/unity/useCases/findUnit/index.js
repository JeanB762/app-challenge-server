"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUnitRepository_1 = require("../../repositories/implementations/MongoUnitRepository");
const FindUnitUseCase_1 = require("./FindUnitUseCase");
const FindUnitController_1 = require("./FindUnitController");
exports.default = () => {
    const unitRepository = new MongoUnitRepository_1.MongoUnitRepository();
    const findUnitUseCase = new FindUnitUseCase_1.FindUnitUseCase(unitRepository);
    const findUnitController = new FindUnitController_1.FindUnitController(findUnitUseCase);
    return findUnitController;
};
