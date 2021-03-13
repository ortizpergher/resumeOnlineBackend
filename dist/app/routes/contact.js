"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ContactController = require('../controllers/ContactController'); var _ContactController2 = _interopRequireDefault(_ContactController);
var _contact = require('../middlewares/contact');

const routes = new (0, _express.Router)();

routes.get('/contact', _ContactController2.default.index);
routes.post('/contact', _contact.validateData, _ContactController2.default.store);
// routes.put('/contact/:id', validateData, ContactController.update);
routes.get('/contact/:id', _contact.validateContactExist, _ContactController2.default.show);
routes.delete('/contact/:id', _contact.validateContactExist, _ContactController2.default.delete);

exports. default = routes;
