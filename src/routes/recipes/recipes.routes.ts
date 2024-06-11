import express from 'express';

import {
  httpGetAllRecipes,
  httpGetOneRecipe,
  httpAddRecipe,
  httpDeleteRecipeById
} from './recipes.controller';

export const recipesRouter = express.Router();

recipesRouter.get('/', httpGetAllRecipes);
recipesRouter.get('/:id', httpGetOneRecipe);
recipesRouter.delete('/:id', httpDeleteRecipeById);
recipesRouter.post('/', httpAddRecipe);
