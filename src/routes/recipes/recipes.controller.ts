import { Request, Response } from 'express';

import { getAllRecipes } from '../../models/recipes.model';

export async function httpGetAllRecipes(req: Request, res: Response) {
  return await res.status(200).json(getAllRecipes());
}
