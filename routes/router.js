const router = require("express").Router()

const userServer = require('./personRoutes')

router.use("/", userServer)

module.exports = router 