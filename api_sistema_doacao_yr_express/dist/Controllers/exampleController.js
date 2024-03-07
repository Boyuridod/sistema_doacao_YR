"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class exampleController {
    exampleRoute(req, res) {
        res.json({ message: 'Hello from Express.js!' });
    }
}
exports.default = new exampleController();
