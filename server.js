"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5003;
console.log(process.env.PORT);
app.get("/", (rep, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`app is listening to port: ${port}`);
});
