import { Request, Response } from 'express';

import { getAllRecipes } from '../../models/recipes.model';

export async function httpGetAllRecipes(
  req: Request,
  res: Response
): Promise<Response> {
  const recipes = await getAllRecipes();
  return res.status(200).json(recipes);
}
