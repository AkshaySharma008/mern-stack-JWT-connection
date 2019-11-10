//we shall define our express server here //
const express = require('express')
const userRouter = require('./routers/user')
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(express.json())


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

