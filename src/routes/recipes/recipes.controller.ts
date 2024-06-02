import { Request, Response } from 'express';

import {
  getAllRecipes,
  getOneRecipe
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
  const recipeId = +req.params.id;
  const recipe = await getOneRecipe(recipeId);
  return res.status(200).json(recipe);
}
