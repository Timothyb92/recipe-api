import http from 'http';
import app from './app';

import { mongoConnect } from './services/mongo';
import { loadRecipes } from './models/recipes.model';

const server = http.createServer(app);

const PORT = 3000;

async function startServer () {
  await loadRecipes();
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`index.ts listening on port ${PORT}`)
  })
}

startServer();
