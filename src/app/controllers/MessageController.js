import Message from '../models/Message';

class MessageController {
  async index(request, response) {
    const messages = await Message.findAndCountAll({
      attributes: ['id', 'name', 'content', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    return response.json(messages);
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(
      await Message.findByPk(id, {
        attributes: ['id', 'name', 'content', 'read', 'created_at'],
      })
    );
  }

  async store(request, response) {
    const { name, content } = request.body;

    return response.json(await Message.create({ name, content, read: false }));
  }

  // async update(request, response) {}

  async delete(request, response) {
    const { id } = request.params;

    await Message.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

export default new MessageController();
