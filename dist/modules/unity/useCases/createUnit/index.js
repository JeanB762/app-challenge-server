"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUnitRepository_1 = require("../../repositories/implementations/MongoUnitRepository");
const CreateUnitController_1 = require("./CreateUnitController");
const CreateUnitUseCase_1 = require("./CreateUnitUseCase");
exports.default = () => {
    const unitRepository = new MongoUnitRepository_1.MongoUnitRepository();
    const createUnitUseCase = new CreateUnitUseCase_1.CreateUnitUseCase(unitRepository);
    const createUnitController = new CreateUnitController_1.CreateUnitController(createUnitUseCase);
    return createUnitController;
};
