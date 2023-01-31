"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
require("dotenv/config");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const routes_1 = require("./routes");
const ErrorsHandler_1 = require("./errors/ErrorsHandler");
const conectDatabase_1 = require("./database/conectDatabase");
const app = (0, express_1.default)();
const port = process.env.PORT || 3333;
(0, conectDatabase_1.connectDatabse)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use('/avatar', express_1.default.static((0, path_1.resolve)(__dirname, '../uploads/avatar')));
app.use('/assetsPictures', express_1.default.static((0, path_1.resolve)(__dirname, '../uploads/assetsPictures')));
app.get('/', (request, response) => {
    return response.status(200).send('App Challenge');
});
app.use(routes_1.router);
app.use((error, request, response, next) => {
    if (error instanceof ErrorsHandler_1.ErrorsHandler)
        return response.status(error.statusCode).json({ message: error.message });
    return response.status(500).json({
        status: 'error',
        message: `Internal server error  - ${error.message}`,
    });
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
