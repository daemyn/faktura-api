const { expect } = require('chai');

describe('My first test', () => {
  it('Tests if generatePosts function behaves correctly', () => {
    const posts = [];
    expect(posts).to.be.an('array');
  });
});
