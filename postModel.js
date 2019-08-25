const Sequelize = require('sequelize')
const sequelize = require('./dbConfig.js')

const Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Post
