import { Router } from 'express';
import ContactController from '../controllers/ContactController';
import { validateData, validateContactExist } from '../middlewares/contact';

const routes = new Router();

routes.get('/contact', ContactController.index);
routes.post('/contact', validateData, ContactController.store);
// routes.put('/contact/:id', validateData, ContactController.update);
routes.get('/contact/:id', validateContactExist, ContactController.show);
routes.delete('/contact/:id', validateContactExist, ContactController.delete);

export default routes;
