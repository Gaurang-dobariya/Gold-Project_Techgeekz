let mongoose = require("mongoose")

let goldSchema = new mongoose.Schema({
    Handle: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Reference_Bit: {
        type: Number,
        required: true
    },
    Gross_Weight: {
        type: Number,
        required: true
    },
    Variant_Grams: {
        type: Number,
        required: true
    },
    Making_Rate: {
        type: Number,
        required: true
    },
    Making_Price: {
        type: Number,
        required: true
    },
    Gold_Rate: {
        type: Number,
        required: true
    },
    Gold_Price: {
        type: Number,
        required: true
    },
    Diamond_Weight: {
        type: String,
        required: true
    },
    Diamond_Price: {
        type: Number,
        required: true
    },
    Variant_Price: {
        type: Number,
        required: true
    },
    Variant_SKU: {
        type: String,
        required: true
    },
    Variant_Weight_Unit: {
        type: String,
        required: true
    },
    Option1_Name: {
        type: String,
        required: true
    },
    Option1_Value: {
        type: String,
        required: true
    },
    Option2_Name: {
        type: String,
        required: true
    },
    Option2_Value: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },

})

let gold = mongoose.model("goldSchema",goldSchema)

module.exports = gold