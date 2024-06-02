"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipes_routes_1 = require("./recipes/recipes.routes");
const api = express_1.default.Router();
//TODO add api endpoinds for app.use()
api.use('/recipes', recipes_routes_1.recipesRouter);
exports.default = api;
