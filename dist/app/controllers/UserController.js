"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async index(request, response) {
    const users = await _User2.default.findAndCountAll();

    return response.json(users);
  }

  async show(request, response) {
    const { user } = request;

    return response.json(
      await _User2.default.findByPk(user, {
        attributes: ['id', 'name', 'email'],
      })
    );
  }

  async store(request, response) {
    const { name, email, password } = request.body;

    return response.json(await _User2.default.create({ name, email, password }));
  }

  async update(request, response) {
    const { user } = request;
    const { name, email } = request.body;

    user.name = name;
    user.email = email;
    user.save();

    return response.json(user);
  }

  async delete(request, response) {
    const { user } = request;

    await _User2.default.destroy({
      where: {
        id: user,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new UserController();
