let express = require("express")
const { goldController } = require("../controller")

let route = express.Router()

route.post("/add", goldController.addGold)
route.get("/get", goldController.fetchData)

module.exports = route