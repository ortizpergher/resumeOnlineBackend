import User from '../models/User';

class UserController {
  async index(request, response) {
    const users = await User.findAndCountAll();

    return response.json(users);
  }

  async show(request, response) {
    const { user } = request;

    return response.json(
      await User.findByPk(user, {
        attributes: ['id', 'name', 'email'],
      })
    );
  }

  async store(request, response) {
    const { name, email, password } = request.body;

    return response.json(await User.create({ name, email, password }));
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

    await User.destroy({
      where: {
        id: user,
      },
    });

    return response.sendStatus(204);
  }
}

export default new UserController();
