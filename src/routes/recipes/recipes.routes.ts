import express from 'express';

import {
  httpGetAllRecipes,
  httpGetOneRecipe,
  httpAddRecipe,
} from './recipes.controller';

export const recipesRouter = express.Router();

recipesRouter.get('/', httpGetAllRecipes);
recipesRouter.get('/:id', httpGetOneRecipe);
recipesRouter.post('/', httpAddRecipe);
