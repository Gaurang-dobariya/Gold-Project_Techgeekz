const { goldSchema } = require("../model")

let addGold = (body) => {
    return goldSchema.create(body)
}

let fetchData = () => {
    return goldSchema.find()
}

let UpdatePrice = (id, body) => {
    return goldSchema.findByIdAndUpdate(id, body, { new: true })
}

module.exports = { addGold, fetchData, UpdatePrice }