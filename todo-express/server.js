const express = require("express")
const baseRouter = require("./routes")

const app = express()

app.use("/", baseRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
