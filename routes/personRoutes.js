const router = require("express").Router()
const Person = require('../models/Person')
const serviceController = require('../controller/serviceController')

// Create - criação de dados

router.route("/").post((req, res) => serviceController.create(req, res))

// READ - leitura de dados 

router.route("/").get((req, res) => serviceController.readUsers(req, res))

router.route("/:id").get((req, res) => serviceController.readUser(req, res))

// Update - atualização de dados

router.route("/:id").patch((req, res) => serviceController.uptade(req, res))

// Delete - deletar dados 

router.route("/:id").delete((req, res) => serviceController.delete(req, res))



module.exports = router 