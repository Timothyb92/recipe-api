import { recipes, Recipe } from '../utils/recipes';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  return recipes;
};

export const getOneRecipe = async (recipeId: number): Promise<Recipe> => {
  return recipes[recipeId]
}

export const addRecipe = async (recipe: Recipe): Promise<Recipe[]> => {
  recipes.push(recipe);
  console.log(`Added recipe ${recipe.recipeName}`)
  return recipes;
}
