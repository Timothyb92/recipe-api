import http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`index.ts listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('<h1>GET request @ root</h1>')
})
