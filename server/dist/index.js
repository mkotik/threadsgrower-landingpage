"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pool = require("./db");
require("dotenv").config();
const server = (0, express_1.default)();
const PORT = process.env.PORT;
server.use(express_1.default.json());
server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
server.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSignups = yield pool.query("SELECT * FROM earlyAccessSignups");
        res.json(allSignups.rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}));
server.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, handle } = req.body;
        const newSignup = yield pool.query("INSERT INTO earlyAccessSignups (email, handle) VALUES ($1, $2) RETURNING *", [email, handle]);
        res.json(newSignup.rows[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}));
server.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
