/* eslint-disable consistent-return */
import Contact from '../models/Contact';

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

  const contact = await Contact.findByPk(id);

  if (!contact) {
    return response.status(404).json({
      message: 'Contato não encontrado',
    });
  }

  next();
}

export { validateData, validateContactExist };
