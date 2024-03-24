"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dados_1 = __importDefault(require("../../Models/Dados/Dados"));
const logger_1 = __importDefault(require("../../Log/logger"));
class DataController {
    exampleRoute(req, res) {
        let newObject = Dados_1.default.fromJson(req.body);
        logger_1.default.info(newObject);
        res.json(newObject);
    }
}
exports.default = new DataController();
