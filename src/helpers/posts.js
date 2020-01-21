module.exports.generatePosts = () => {
  return [
    {
      title: 'My first post',
      content: 'My fake content for my first post',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'My second post',
      content: 'My fake content for my 2nd post',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];
};
