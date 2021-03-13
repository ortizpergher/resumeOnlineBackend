import { Router } from 'express';
import MessageController from '../controllers/MessageController';
import { validateData, validateMessageExist } from '../middlewares/message';

const routes = new Router();

routes.get('/message', MessageController.index);
routes.post('/message', validateData, MessageController.store);
// routes.put('/message/:id', MessageController.update);
routes.get('/message/:id', validateMessageExist, MessageController.show);
routes.delete('/message/:id', validateMessageExist, MessageController.delete);

export default routes;
