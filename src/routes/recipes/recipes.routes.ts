import express from 'express';

import {
  httpGetAllRecipes,
  httpGetOneRecipe,
  httpAddRecipe,
  httpDeleteRecipeById,
  httpUpdateRecipe
} from './recipes.controller';

export const recipesRouter = express.Router();

recipesRouter.get('/', httpGetAllRecipes);
recipesRouter.get('/:id', httpGetOneRecipe);
recipesRouter.delete('/:id', httpDeleteRecipeById);
recipesRouter.post('/', httpAddRecipe);
recipesRouter.patch('/:id', httpUpdateRecipe);
