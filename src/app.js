import express from 'express';
import { users, posts } from './routes/index.js';
import { authenticate } from './middleware/index.js';
import * as services from './services/index.js';

const app = express();

//esto reemplaza body-parser, applitation/json
app.use(express.json());

//esto es para los formularios application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

// inyeccion de dependencias
const usersHandlers = users(services);
const postsHandlers = posts(services);

app.get('/', usersHandlers.get );

app.post('/', authenticate, postsHandlers.post)

app.patch('/:id', usersHandlers.patch)

app.delete('/:id', usersHandlers.delete)

export { app };
