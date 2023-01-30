"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoUnitRepository_1 = require("../../repositories/implementations/MongoUnitRepository");
const ListUnitsUseCase_1 = require("./ListUnitsUseCase");
const ListUnitsController_1 = require("./ListUnitsController");
exports.default = () => {
    const unitsRepository = new MongoUnitRepository_1.MongoUnitRepository();
    const listUnitsUseCase = new ListUnitsUseCase_1.ListUnitsUseCase(unitsRepository);
    const listUnitsController = new ListUnitsController_1.ListUnitsController(listUnitsUseCase);
    return listUnitsController;
};
