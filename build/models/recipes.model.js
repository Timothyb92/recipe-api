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
exports.updateRecipe = exports.deleteRecipeById = exports.addRecipe = exports.getOneRecipe = exports.getAllRecipes = exports.loadRecipes = void 0;
const recipes_1 = require("../utils/recipes");
const recipes_mongo_1 = require("./recipes.mongo");
const loadRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    recipes_1.recipes.forEach((recipe) => {
        (0, exports.addRecipe)(recipe);
    });
});
exports.loadRecipes = loadRecipes;
const getAllRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipes_mongo_1.recipeDB.find({});
});
exports.getAllRecipes = getAllRecipes;
const getOneRecipe = (recipeId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipes_mongo_1.recipeDB.findOne({
        _id: recipeId,
    });
});
exports.getOneRecipe = getOneRecipe;
const addRecipe = (recipe) => __awaiter(void 0, void 0, void 0, function* () {
    yield recipes_mongo_1.recipeDB.updateOne(Object.assign({}, recipe), Object.assign({}, recipe), { upsert: true });
});
exports.addRecipe = addRecipe;
const deleteRecipeById = (recipeId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipes_mongo_1.recipeDB.findByIdAndDelete({
        _id: recipeId,
    });
});
exports.deleteRecipeById = deleteRecipeById;
const updateRecipe = (recipeId, recipeField, updatedInfo /*Need to update type of updatedInfo*/) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipes_mongo_1.recipeDB.findByIdAndUpdate({ _id: recipeId }, { [recipeField]: updatedInfo });
});
exports.updateRecipe = updateRecipe;
