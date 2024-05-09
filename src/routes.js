const express = require('express')

const userController = require('./controllers/UserContoller')

const router = express.Router();

// router.get('/', (req, res) => {
//   return res.send("Olá mundo!")
// })

router.get('/users',userController.index)

module.exports = router