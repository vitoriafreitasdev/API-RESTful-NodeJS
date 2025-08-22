const router = require("express").Router()
const Person = require('../models/Person')
const serviceController = require('../controller/serviceController')

// Create - criação de dados

router.post('/', async (req, res) => serviceController.create(req, res))

// READ - leitura de dados 

router.get('/', async (req, res) => serviceController.readUsers(req, res))

router.get('/:id', async (req, res) => serviceController.readUser(req, res))

// Update - atualização de dados

router.patch('/:id', async (req, res) => serviceController.uptade(req, res))

// Delete - deletar dados 

router.delete('/:id', async (req, res) => serviceController.delete(req, res))



module.exports = router 