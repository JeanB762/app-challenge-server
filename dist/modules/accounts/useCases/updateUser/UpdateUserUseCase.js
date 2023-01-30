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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const file_1 = require("../../../../utils/file");
class UpdateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    execute({ id, name, email, role, avatar, companyId, unitId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findById(id);
            if (user.avatar)
                yield (0, file_1.deleteFile)(`./uploads/avatar/${user.avatar}`);
            yield this.usersRepository.update({
                id,
                name,
                email,
                role,
                avatar,
                companyId,
                unitId,
            });
        });
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
