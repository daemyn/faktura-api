const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
  const token = jwt.sign({ payload: 'test' }, process.env.APP_SECRET, { expiresIn: process.env.TOKEN_LIFETIME });
  res.json({ token });
};
