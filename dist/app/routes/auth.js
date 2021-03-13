"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AuthController = require('../controllers/AuthController'); var _AuthController2 = _interopRequireDefault(_AuthController);

const routes = new (0, _express.Router)();

routes.post('/login', _AuthController2.default.store);

exports. default = routes;
