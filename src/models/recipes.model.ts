import { recipes, Recipe } from '../utils/recipes';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  console.log('Returning recipes');
  return await recipes;
};
