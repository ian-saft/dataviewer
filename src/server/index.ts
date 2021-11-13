import express, { Router } from 'express';
import cors from 'cors';

import config from '../config/server.json';

import UserController from '../controllers/UserController';

const app = express();

app.use(express.json());
app.use(cors());

const routes = Router();

const userController = new UserController();

routes.post('/user/create', userController.create);
routes.get('/user', userController.find);

app.use(routes);

app.listen(config.PORT, () => {
  console.log(`Server is running on ${config.HOST}:${config.PORT}`); // eslint-disable-line
});
