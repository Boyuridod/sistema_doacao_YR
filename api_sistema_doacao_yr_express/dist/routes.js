"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DataController_1 = __importDefault(require("./Controllers/DataController/DataController"));
const TestController_1 = __importDefault(require("./Controllers/TestController/TestController"));
const middleware_1 = __importDefault(require("./middlewares/middleware"));
const router = express_1.default.Router();
router.get('/', TestController_1.default.firstTest);
router.get('/teste/:id', TestController_1.default.secondTest);
router.get('/testeQuery', TestController_1.default.queryTest);
router.post('/formulario', middleware_1.default.validateText, middleware_1.default.validateInteger, middleware_1.default.validateBoolean, middleware_1.default.validateDropbox, middleware_1.default.validateRadioButton, DataController_1.default.exampleRoute);
exports.default = router;
