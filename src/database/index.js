const Sequelize = require('sequelize')

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

try {
  connection.authenticate()
  console.log("Conectado")
} catch(error) {
  console.lgo("Não conectado", error)
}

module.exports = connection