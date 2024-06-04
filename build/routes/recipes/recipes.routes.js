"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesRouter = void 0;
const express_1 = __importDefault(require("express"));
const recipes_controller_1 = require("./recipes.controller");
exports.recipesRouter = express_1.default.Router();
exports.recipesRouter.get('/', recipes_controller_1.httpGetAllRecipes);
exports.recipesRouter.get('/:id', recipes_controller_1.httpGetOneRecipe);
exports.recipesRouter.post('/', recipes_controller_1.httpAddRecipe);
