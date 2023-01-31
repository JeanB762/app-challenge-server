"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AssetSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    healthlevel: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    companyId: {
        type: String,
        required: true,
    },
    unitId: {
        type: String,
        required: true,
    },
    responsibles: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('Asset', AssetSchema);
