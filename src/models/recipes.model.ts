import { recipes, Recipe } from "../utils/recipes";
import { recipeDB } from "./recipes.mongo";

export const loadRecipes = async (): Promise<void> => {
  recipes.forEach((recipe): void => {
    addRecipe(recipe);
  });
};

export const getAllRecipes = async (): Promise<Recipe[]> => {
  return await recipeDB.find({});
};

export const getOneRecipe = async (
  recipeId: string,
): Promise<Recipe | null> => {
  return await recipeDB.findOne({
    _id: recipeId,
  });
};

export const addRecipe = async (recipe: Recipe): Promise<void> => {
  await recipeDB.updateOne({ ...recipe }, { ...recipe }, { upsert: true });
};

export const deleteRecipeById = async (
  recipeId: string,
): Promise<Recipe | null> => {
  return await recipeDB.findByIdAndDelete({
    _id: recipeId,
  });
};

export const updateRecipe = async (
  recipeId: string,
  recipeField: string,
  updatedInfo: any /*Need to update type of updatedInfo*/,
): Promise<Recipe | null> => {
  return await recipeDB.findByIdAndUpdate(
    { _id: recipeId },
    { [recipeField]: updatedInfo },
  );
};
