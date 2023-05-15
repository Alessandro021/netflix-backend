import express, { response } from "express"
export const router = express.Router()
import { Usuario } from "../models/usuario.js"

router.post("/login",async (req, res) => {
    const credenciais = req.body

    await Usuario.findOne(credenciais)
    .then(usuario => {
        if (usuario) { 
            res.json({error: false, usuario})
        } else{
            res.json({error : true, message: "Nenhum usuario encontrado!"})
        }
    })
    .catch(error => res.json({error: true, message: error.message}))

})