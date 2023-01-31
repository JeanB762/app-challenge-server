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
exports.ensureAuthentication = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const ErrorsHandler_1 = require("../errors/ErrorsHandler");
const MongoUserRepository_1 = require("../modules/accounts/repositories/implementations/MongoUserRepository");
function ensureAuthentication(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new ErrorsHandler_1.ErrorsHandler('Token missing', 401);
        }
        const [, token] = authHeader.split(' ');
        try {
            const { sub: userId } = (0, jsonwebtoken_1.verify)(token, '603efe5d016c96a27a00c76ad84aa9f9');
            const usersRepository = new MongoUserRepository_1.MongoUsersRepository();
            const user = yield usersRepository.findById(userId);
            if (!user)
                throw new ErrorsHandler_1.ErrorsHandler('User does not exists', 401);
            request.user = { id: userId };
            return next();
        }
        catch (error) {
            throw new ErrorsHandler_1.ErrorsHandler('Invalid token', 401);
        }
    });
}
exports.ensureAuthentication = ensureAuthentication;
