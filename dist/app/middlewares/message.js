"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _Message = require('../models/Message'); var _Message2 = _interopRequireDefault(_Message);

function validateData(request, response, next) {
  const { name, content } = request.body;

  if ((!name, !content)) {
    return response.status(400).json({
      massage: `Dados inválidos`,
    });
  }

  next();
}

async function validateMessageExist(request, response, next) {
  const { id } = request.params;

  const message = await _Message2.default.findByPk(id);

  if (!message) {
    return response.status(404).json({
      message: 'Mensagem não encontrada',
    });
  }

  next();
}

exports.validateData = validateData; exports.validateMessageExist = validateMessageExist;
