import express, { json } from "express"
import morgan from "morgan"
import { router } from "./src/routes/filmes.routes.js"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()

try {
    mongoose.connect(process.env.URL_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
} catch (error) {
    console.log(error)
}

app.use(morgan("dev"))
app.use(json())
app.use("/", router)

app.listen(process.env.PORT || 3000,() => {
    console.log(`Servidor rodando na porta ${process.env.PORT} ou 3000`)
})