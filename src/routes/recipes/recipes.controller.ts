import { Request, Response } from 'express';
import { Recipe } from '../../utils/recipes';

import {
  getAllRecipes,
  getOneRecipe,
  addRecipe,
  deleteRecipeById,
  deleteRecipe,
} from '../../models/recipes.model';

export async function httpGetAllRecipes(
  req: Request,
  res: Response
): Promise<Response> {
  const recipes = await getAllRecipes();
  return res.status(200).json(recipes);
}

export async function httpGetOneRecipe(
  req: Request,
  res: Response
): Promise<Response> {
  const recipeId = req.params.id;
  console.log(recipeId);
  const recipe = await getOneRecipe(recipeId);
  return res.status(200).json(recipe);
}

export async function httpAddRecipe(
  req: Request,
  res: Response
): Promise<Response> {
  const recipe: Recipe = req.body;

  await addRecipe(recipe);
  return res.status(201).json(recipe)
}

export async function httpDeleteRecipeById(
  req: Request,
  res: Response
): Promise<Response> {
  const recipeId = req.params.id
  const recipe = await deleteRecipeById(recipeId)
  return res.status(200).json(recipe)
}
