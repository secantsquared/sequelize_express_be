const Post = require('./postModel')

Post.sync({ force: true })
  .then(() =>
    Post.create({
      title: 'Test',
      description: 'This is a test.'
    })
  )
  .then(() =>
    Post.create({
      title: 'Test2',
      description: 'Test2'
    })
  )
