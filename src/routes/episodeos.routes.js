import express, { response } from "express"
export const router = express.Router()
import { Episodio } from "../models/episodio.js"

router.get("/temporada/:temporada",async (req, res) => {
    const temporada_id = req.params.temporada
    await Episodio.find({
        temporada_id: temporada_id
    })
    .then( episodio => res.json({error: false, episodio}))
    .catch(error => res.json({error: true, message: error.message}))
})