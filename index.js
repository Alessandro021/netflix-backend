import express, { json } from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()
import { database } from "./src/services/database.js"
import cors from "cors"
import  { router as filmesRoutes }  from "./src/routes/filmes.routes.js"
import  { router as usuariosRoutes }  from "./src/routes/usuarios.routes.js"
import  { router as episodeosRoutes }  from "./src/routes/episodeos.routes.js"


const app = express()

//MIDDLEWARES
app.use(morgan("dev"))
app.use(json())
app.use(cors())

//ROUTES
app.use("/", filmesRoutes)
app.use("/usuario", usuariosRoutes)
app.use("/episodeo", episodeosRoutes)


app.listen(process.env.PORT || 3000,() => {
    console.log(`Servidor rodando na porta ${process.env.PORT} ou 3000`)
})