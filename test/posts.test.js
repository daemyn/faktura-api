const expect = require("chai").expect;
const { generatePosts } = require('../src/helpers/posts');

describe('My first test', () => {
  it('Tests if generatePosts function behaves correctly', () => {
    const posts = generatePosts();
    expect(posts).to.be.an('array');
  });
});
