"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _Contact = require('../models/Contact'); var _Contact2 = _interopRequireDefault(_Contact);

function validateData(request, response, next) {
  const { name, email, phone, message } = request.body;

  if ((!name, !email, !phone, !message)) {
    return response.status(400).json({
      massage: `Dados inválidos`,
    });
  }

  next();
}

async function validateContactExist(request, response, next) {
  const { id } = request.params;

  const contact = await _Contact2.default.findByPk(id);

  if (!contact) {
    return response.status(404).json({
      message: 'Contato não encontrado',
    });
  }

  next();
}

exports.validateData = validateData; exports.validateContactExist = validateContactExist;
