"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class AuthController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await _User2.default.findOne({
      where: { email },
    });

    if (!user) {
      return response.status(401).json({
        message: 'Login or password invalid',
      });
    }

    if (!(await user.checkPassword(password))) {
      return response.status(401).json({
        message: 'Login or password invalid',
      });
    }

    return response.json({
      message: 'Login success',
      user: user.email,
      token: _jsonwebtoken2.default.sign({ id: user.id }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn,
      }),
    });
  }
}

exports. default = new AuthController();
