import express, { Router } from 'express';

import { recipesRouter } from './recipes/recipes.routes';

const api: Router = express.Router();

//TODO add api endpoinds for app.use()
api.use('/recipes', recipesRouter);

export default api;
