import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = new Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.get('/user/:id', UserController.show);
routes.delete('/user/:id', UserController.delete);

export default routes;
