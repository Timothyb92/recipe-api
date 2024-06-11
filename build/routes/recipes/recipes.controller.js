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
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeleteRecipeById = exports.httpAddRecipe = exports.httpGetOneRecipe = exports.httpGetAllRecipes = void 0;
const recipes_model_1 = require("../../models/recipes.model");
function httpGetAllRecipes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const recipes = yield (0, recipes_model_1.getAllRecipes)();
        return res.status(200).json(recipes);
    });
}
exports.httpGetAllRecipes = httpGetAllRecipes;
function httpGetOneRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const recipeId = req.params.id;
        console.log(recipeId);
        const recipe = yield (0, recipes_model_1.getOneRecipe)(recipeId);
        return res.status(200).json(recipe);
    });
}
exports.httpGetOneRecipe = httpGetOneRecipe;
function httpAddRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const recipe = req.body;
        yield (0, recipes_model_1.addRecipe)(recipe);
        return res.status(201).json(recipe);
    });
}
exports.httpAddRecipe = httpAddRecipe;
function httpDeleteRecipeById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const recipeId = req.params.id;
        const recipe = yield (0, recipes_model_1.deleteRecipeById)(recipeId);
        return res.status(200).json(recipe);
    });
}
exports.httpDeleteRecipeById = httpDeleteRecipeById;
