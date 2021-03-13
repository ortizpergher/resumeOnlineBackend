"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _MessageController = require('../controllers/MessageController'); var _MessageController2 = _interopRequireDefault(_MessageController);
var _message = require('../middlewares/message');

const routes = new (0, _express.Router)();

routes.get('/message', _MessageController2.default.index);
routes.post('/message', _message.validateData, _MessageController2.default.store);
// routes.put('/message/:id', MessageController.update);
routes.get('/message/:id', _message.validateMessageExist, _MessageController2.default.show);
routes.delete('/message/:id', _message.validateMessageExist, _MessageController2.default.delete);

exports. default = routes;
