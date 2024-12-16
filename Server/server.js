require("dotenv").config()
let http = require("http")
let express = require("express")
let cors = require("cors")
let cron =  require("node-cron")
const dbConnect = require("./config/dbConnect")
const routes = require("./routes")
let liveGoldPrice = require("./Gold_api/goldUpdateApi")

let app = express()

// for jason body
app.use(express.json())

app.use(cors())

// routes
app.use("/v1", routes)

// database connection
dbConnect()


cron.schedule('0 0 * * *', () => {
    liveGoldPrice()
});


http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);

})

