import express from 'express';

import {
  httpGetAllRecipes,
  httpGetOneRecipe
} from './recipes.controller';

export const recipesRouter = express.Router();

recipesRouter.get('/', httpGetAllRecipes);
recipesRouter.get('/:id', httpGetOneRecipe);
