"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const routes = new (0, _express.Router)();

routes.get('/user', _UserController2.default.index);
routes.post('/user', _UserController2.default.store);
routes.put('/user/:id', _UserController2.default.update);
routes.get('/user/:id', _UserController2.default.show);
routes.delete('/user/:id', _UserController2.default.delete);

exports. default = routes;
