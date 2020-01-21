const { generatePosts } = require('../helpers/posts');

module.exports.getAll = (req, res) => {
  const posts = generatePosts();
  res.json(posts);
}
