import { recipes, Recipe } from '../utils/recipes';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  return recipes;
};

export const getOneRecipe = async (recipeId: number): Promise<Recipe> => {
  console.log(`recipeId: ${recipeId}`);
  console.log(`Recipe being returned: ${recipes[recipeId]}`);
  return recipes[recipeId]
}
