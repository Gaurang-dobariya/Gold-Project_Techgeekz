const { goldService } = require("../services")

let addGold = async (req, res) => {
    try {

        let body = req.body

        let gold = await goldService.addGold(body)

        res.status(201).json({
            message: "Gold Price add success",
            gold
        })

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

let fetchData = async (req, res) => {
    try {

        let data = await goldService.fetchData()

        res.status(200).json({
            message: "Data get success",
            data
        })

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { addGold, fetchData }