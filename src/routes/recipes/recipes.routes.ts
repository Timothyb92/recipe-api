import express from 'express';

import { httpGetAllRecipes } from './recipes.controller';

export const recipesRouter = express.Router();

recipesRouter.get('/', httpGetAllRecipes);
