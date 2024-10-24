"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.use(express_1.default.static("public"));
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
