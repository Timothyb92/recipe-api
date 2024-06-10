import { recipes, Recipe } from '../utils/recipes';
import { recipeDB } from './recipes.mongo';

export const loadRecipes = async (): Promise<void> => {
  recipes.forEach((recipe): void => {
    addRecipe(recipe);
  })
}

export const getAllRecipes = async (): Promise<Recipe[]> => {
  return await recipeDB.find({});
}

export const getOneRecipe = async (recipeId: string): Promise<Recipe | null> => {
  return await recipeDB.findOne({
    _id: recipeId
  })
}

export const addRecipe = async (recipe: Recipe): Promise<void> => {
  await recipeDB.updateOne(
    {...recipe},
    {...recipe},
    {upsert: true}
  );
}
