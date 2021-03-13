"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

exports. default = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Invalid Token',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await _jsonwebtoken2.default.verify(token, _auth2.default.secret);
    request.id = decoded.id;

    next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid Token',
    });
  }
};
