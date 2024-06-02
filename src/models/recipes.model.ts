import { recipes, Recipe } from '../utils/recipes';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  return recipes;
};

export const getOneRecipe = async (recipeId: number): Promise<Recipe> => {
  return recipes[recipeId]
}
