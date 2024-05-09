const User = require('../models/User')

module.exports = {
  // buscar tudo de uma tabela
  async index(req, res) {
    const users = await User.findAll()
    if (users = '' || users == null) {
      return res.status(200).send({ message: "Nenhum usuário cadastrado" })
    }
    return res.status(200).send({ users })
  },
  // salvar 
  async store(req, res) {

  },
  // atualizar
  async update(req, res) {

  },
  // deletar
  async delete(req, res) {

  }
}