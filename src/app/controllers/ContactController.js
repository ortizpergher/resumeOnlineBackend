import { Op } from 'sequelize';
import Contact from '../models/Contact';

class ContactController {
  async index(request, response) {
    let { limit, page, text = '' } = request.query;

    if (!page) {
      page = 1;
    }

    if (!limit) {
      limit = 5;
    }

    const contacts = await Contact.findAndCountAll({
      where: {
        [Op.or]: {
          name: {
            [Op.iLike]: `%${text}%`,
          },
          email: {
            [Op.iLike]: `%${text}%`,
          },
          phone: {
            [Op.iLike]: `%${text}%`,
          },
          message: {
            [Op.iLike]: `%${text}%`,
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
      await Contact.findByPk(id, {
        attributes: ['id', 'name', 'email', 'phone', 'message', 'created_at'],
      })
    );
  }

  async store(request, response) {
    const { name, email, phone, message } = request.body;

    return response.json(
      await Contact.create({ name, email, phone, message, read: false })
    );
  }

  async delete(request, response) {
    const { id } = request.params;

    await Contact.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

export default new ContactController();
