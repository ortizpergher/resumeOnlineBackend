"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Message = require('../models/Message'); var _Message2 = _interopRequireDefault(_Message);

class MessageController {
  async index(request, response) {
    const messages = await _Message2.default.findAndCountAll({
      attributes: ['id', 'name', 'content', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    return response.json(messages);
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(
      await _Message2.default.findByPk(id, {
        attributes: ['id', 'name', 'content', 'read', 'created_at'],
      })
    );
  }

  async store(request, response) {
    const { name, content } = request.body;

    return response.json(await _Message2.default.create({ name, content, read: false }));
  }

  // async update(request, response) {}

  async delete(request, response) {
    const { id } = request.params;

    await _Message2.default.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new MessageController();
