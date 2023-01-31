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
exports.AuthenticateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const ErrorsHandler_1 = require("../../../../errors/ErrorsHandler");
class AuthenticateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findByEmail(email);
            if (!user)
                throw new ErrorsHandler_1.ErrorsHandler('Email or password incorrect', 400);
            const passwordMatch = yield (0, bcrypt_1.compare)(password, user.password);
            if (!passwordMatch)
                throw new ErrorsHandler_1.ErrorsHandler('Email or password incorrect', 400);
            const token = (0, jsonwebtoken_1.sign)({}, '603efe5d016c96a27a00c76ad84aa9f9', {
                subject: user.id,
                expiresIn: '1d',
            });
            const tokenInfo = {
                user: {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            };
            return tokenInfo;
        });
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
