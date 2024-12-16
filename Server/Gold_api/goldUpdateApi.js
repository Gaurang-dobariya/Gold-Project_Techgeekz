let axios = require("axios");
const { goldService } = require("../services");

let liveGoldPrice = async () => {
    try {
        let config = await axios.get('https://gold.g.apised.com/v1/latest?metals=XAU,XAG,XPT,XPD&base_currency=KWD&currencies=EUR,KWD,GBP,USD&weight_unit=gram', {
            headers: { 'x-api-key': 'sk_5cBCB24cC2CDc8e3597CC64F10a279b7564337d2c08F3f72' }
        })

        let goldPrice = config.data.data.metal_prices.XAU
        console.log(goldPrice);

        let gold = await axios.get("http://localhost:5001/v1/gold/get")
        let data = gold.data.data
        console.log(data);

        for (let val of data) {
            console.log(val.Option2_Value);
            console.log(val.Gold_Price);
            console.log(val.Variant_Grams);

            if (val.Option2_Value == "14Kt") {
                val.Gold_Rate = goldPrice.price_14k;
            }
            else if (val.Option2_Value == "18Kt") {
                val.Gold_Rate = goldPrice.price_18k;
            }
            else if (val.Option2_Value == "22Kt") {
                val.Gold_Rate = goldPrice.price_22k;
            }

            val.Gold_Price = val.Gold_Rate * val.Variant_Price
            // console.log(val.Gold_Rate,"Gold_Rate");
            // console.log(val.Variant_Price,'Variant_Price');
            val.Variant_Price = val.Gold_Price + val.Making_Price + val.Diamond_Price
            // console.log(val.Variant_Price,"Variant_Price");

            await goldService.UpdatePrice(val._id, {
                Gold_Rate: val.Gold_Rate,
                Gold_Price:val.Gold_Price,
                Variant_Price:val.Variant_Price
            })
        }

    } catch (err) {
        console.log(err);
    }
}

module.exports = liveGoldPrice