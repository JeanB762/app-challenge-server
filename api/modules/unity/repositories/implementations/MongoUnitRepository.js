"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUnitRepository = void 0;
const UnitSchema_1 = __importDefault(require("../../../../database/schemas/UnitSchema"));
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
class MongoUnitRepository {
    create({ name, companyId }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UnitSchema_1.default.create({
                    name,
                    companyId,
                });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`Unit creation error - ${error}`, 500);
            }
        });
    }
    update({ id, name, companyId }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UnitSchema_1.default.findOneAndUpdate({ _id: id }, {
                    id,
                    name,
                    companyId,
                });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`Unit update error - ${error}`, 500);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const unit = yield UnitSchema_1.default.findOne({ _id: id });
            return unit;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const units = yield UnitSchema_1.default.find();
            return units;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UnitSchema_1.default.findOneAndDelete({ _id: id });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`Unit delete error - ${error}`, 500);
            }
        });
    }
}
exports.MongoUnitRepository = MongoUnitRepository;
