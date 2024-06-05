import { recipes, Recipe } from '../utils/recipes';
import { recipeDB } from './recipes.mongo';

export const loadRecipes = async (): Promise<void> => {
  recipes.forEach((recipe): void => {
    addMongoRecipe(recipe);
  })
}

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

export const addMongoRecipe = async (recipe: Recipe): Promise<void> => {
  const newRecipe = new recipeDB({...recipe});
  await newRecipe.save();
}
