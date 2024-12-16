let express = require("express")
let goldRoute = require("./gold.route")

let routes = express.Router()

routes.use("/gold", goldRoute)

module.exports = routes