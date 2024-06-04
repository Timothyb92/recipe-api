"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRecipe = exports.recipeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.recipeSchema = new mongoose_1.default.Schema({
    recipeName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    prepTime: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    totalServings: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    tags: { type: [String],
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    vegan: {
        type: Boolean,
        required: true
    },
    vegetarian: {
        type: Boolean,
        required: true
    }
});
exports.MongoRecipe = mongoose_1.default.model('Recipe', exports.recipeSchema);
