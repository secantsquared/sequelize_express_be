const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize
  .authenticate()
  .then(() => console.log('DB connection established.'))
  .catch(({ code, message }) => console.error({ code, message }))

module.exports = sequelize
