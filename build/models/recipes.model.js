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
exports.getOneRecipe = exports.getAllRecipes = void 0;
const recipes_1 = require("../utils/recipes");
const getAllRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    return recipes_1.recipes;
});
exports.getAllRecipes = getAllRecipes;
const getOneRecipe = (recipeId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`recipeId: ${recipeId}`);
    console.log(`Recipe being returned: ${recipes_1.recipes[recipeId]}`);
    return recipes_1.recipes[recipeId];
});
exports.getOneRecipe = getOneRecipe;
