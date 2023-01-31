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
exports.MongoUsersRepository = void 0;
const UserSchema_1 = __importDefault(require("../../../../database/schemas/UserSchema"));
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
const mongoose_1 = __importDefault(require("mongoose"));
class MongoUsersRepository {
    create({ id, name, email, password, role, avatar, companyId, unitId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserSchema_1.default.create({
                    id,
                    name,
                    email,
                    password,
                    role,
                    avatar,
                    companyId,
                    unitId,
                });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`User creation error - ${error}`, 500);
            }
        });
    }
    update({ id, name, email, password, role, avatar, companyId, unitId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserSchema_1.default.findOneAndUpdate({ _id: new mongoose_1.default.Types.ObjectId(id) }, {
                    id,
                    name,
                    email,
                    password,
                    role,
                    avatar,
                    companyId,
                    unitId,
                });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`User update error - ${error}`, 500);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserSchema_1.default.findOne({ _id: id });
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserSchema_1.default.findOne({ email });
            return user;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield UserSchema_1.default.find();
            return users;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserSchema_1.default.findOneAndDelete({ _id: id });
            }
            catch (error) {
                throw new ErrorsHandler_1.ErrorsHandler(`User delete error - ${error}`, 500);
            }
        });
    }
}
exports.MongoUsersRepository = MongoUsersRepository;
