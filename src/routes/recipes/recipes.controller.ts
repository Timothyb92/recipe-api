import { Request, Response } from 'express';
import { Recipe } from '../../utils/recipes';

import {
  getAllRecipes,
  getOneRecipe,
  addRecipe,
  deleteRecipeById,
  updateRecipe,
} from '../../models/recipes.model';

const handleUser = (req: Request, recipe: Recipe): boolean => {
  const accountId = req.get('authorAccountId');
  if (accountId && +accountId === +recipe.authorAccountId) {
    return true
  } else {
    return false
  }
}

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
  const recipe = await getOneRecipe(recipeId)

  if (!recipe) {
    return res.status(404)
  }

  if (handleUser(req, recipe)) {
    const deletedRecipe = await deleteRecipeById(recipeId)
    return res.status(200).json(deletedRecipe)
  } else {
    console.log('Returning status code 403')
    return res.status(403).json({ message: 'Unauthorized'})
  }
}

export async function httpUpdateRecipe(
  req: Request,
  res: Response
): Promise<Response> {
  const recipeId = req.params.id;
  const keyToUpdate = req.body.key;
  const updatedValue = req.body.value;
  const updatedRecipe = await updateRecipe(recipeId, keyToUpdate, updatedValue);
  return res.status(200).json(updatedRecipe);
}
