const User = require('../models/user');

module.exports.register = async (req, res) => {
  try {
    const user = await User.create({
      email: 'hellotest@lengoo.de',
      password: '1234',
      firstName: 'Aymen',
      lastName: 'Labidi',
      address: 'Berlin',
    });
    res.json(user);
  } catch (error) {
    res.status(400);
    res.json({ error: 'Bad request' });
  }
};
