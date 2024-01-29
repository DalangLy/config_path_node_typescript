"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const my_controller_1 = __importDefault(require("@controllers/my.controller"));
const myController = new my_controller_1.default();
console.log(myController.getStudents());
//# sourceMappingURL=app.js.map