import express from 'express';

import {
  httpGetAllRecipes,
  httpGetOneRecipe,
  httpAddRecipe,
  httpAddMongorecipe,
} from './recipes.controller';

export const recipesRouter = express.Router();

recipesRouter.get('/', httpGetAllRecipes);
recipesRouter.get('/:id', httpGetOneRecipe);
//recipesRouter.post('/', httpAddRecipe);
recipesRouter.post('/', httpAddMongorecipe);
