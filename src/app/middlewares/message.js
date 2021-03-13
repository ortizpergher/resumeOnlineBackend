/* eslint-disable consistent-return */
import Message from '../models/Message';

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

  const message = await Message.findByPk(id);

  if (!message) {
    return response.status(404).json({
      message: 'Mensagem não encontrada',
    });
  }

  next();
}

export { validateData, validateMessageExist };
