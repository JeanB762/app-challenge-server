"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UnitSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    companyId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('Unit', UnitSchema);
