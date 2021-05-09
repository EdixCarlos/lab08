// const express = require('express')
import express from "express"
import apiAgenda from "./routes/agenda.js"
import helmet from "helmet"
import morgan from "morgan"
import errorHandler from "./utils/auth/middlewares/errorHandlers"
import notFoundHandler from "./utils/auth/middlewares/notFoundHandler"

const app = express()
app.use(morgan("common"))
app.use(helmet())

app.use(express.json())

app.use("/", apiAgenda)

app.use((req, res) => {
    res.status(404).send("<h1 style=\"color: red;\">Error 404</h1>")
})
app.use(notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
