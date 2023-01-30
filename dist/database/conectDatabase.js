"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabse = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const connectDatabse = () => {
    console.log('Connecting to database...');
    mongoose_1.default.set('strictQuery', true);
    mongoose_1.default
        .connect(process.env.MONGODB_URL)
        .then(() => console.log('Connected to database!'))
        .catch((error) => console.log(`Error to connect to database - ${error}`));
};
exports.connectDatabse = connectDatabse;
