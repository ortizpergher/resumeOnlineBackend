"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Contact = require('../models/Contact'); var _Contact2 = _interopRequireDefault(_Contact);

class ContactController {
  async index(request, response) {
    let { limit, page, text = '' } = request.query;

    if (!page) {
      page = 1;
    }

    if (!limit) {
      limit = 5;
    }

    const contacts = await _Contact2.default.findAndCountAll({
      where: {
        [_sequelize.Op.or]: {
          name: {
            [_sequelize.Op.iLike]: `%${text}%`,
          },
          email: {
            [_sequelize.Op.iLike]: `%${text}%`,
          },
          phone: {
            [_sequelize.Op.iLike]: `%${text}%`,
          },
          message: {
            [_sequelize.Op.iLike]: `%${text}%`,
          },
        },
      },
      attributes: ['id', 'name', 'email', 'phone', 'message', 'created_at'],
      limit,
      offset: limit * (page - 1),
      order: [['created_at', 'DESC']],
    });

    return response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(
      await _Contact2.default.findByPk(id, {
        attributes: ['id', 'name', 'email', 'phone', 'message', 'created_at'],
      })
    );
  }

  async store(request, response) {
    const { name, email, phone, message } = request.body;

    return response.json(
      await _Contact2.default.create({ name, email, phone, message, read: false })
    );
  }

  async delete(request, response) {
    const { id } = request.params;

    await _Contact2.default.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new ContactController();
