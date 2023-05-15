import express, { response } from "express"
export const router = express.Router()
import { Filme } from "../models/filme.js"
import { Temporada } from "../models/temporada.js"
import _ from 'underscore'


//RECUPERAR TELA HOME

router.get("/home", async(req, res) => {

    try {
        //RECUPERANDO TODOS OS FIMES
        let filmes = await Filme.find({})
        let finalFilmes = []

        //RECUPERANDO TEMPORADAS
        for(let filme of filmes ) {
            const temporadas = await Temporada.find({
                filme_id: filme._id
            })
            const newFilme = { ...filme._doc, temporadas }
            finalFilmes.push(newFilme)
        }

        //MISTURAR RESULTADOS ALEATORIAMENTE
        finalFilmes = _.shuffle(finalFilmes)

        //FILME PRINCIPAL
        const principal = finalFilmes[0]

        //SEPARA POR SEÇÕES
        const secoes = _.chunk(finalFilmes, 5)

        res.json({error: false, principal, secoes})


    } catch (error) {
        res.json({error: true, message: error.message})
    }
})

//RECUPERRA TODOS OS REGISTROS
router.get("/", async (req, res) => {
    await Filme.find({})
    .then(filmes => {
        res.json({error: false, filmes})
    })
    .catch(error => {
        res.json({error: true, message: error.message})
    })
})

//PEGA SOMENTE O REGISTRO COM ID
router.get("/:id", async (req, res) => {
    const id = req.params.id
    await Filme.findById(id)
    .then(filme => {
        res.json({error: false, filme})
    })
    .catch(error => {
        res.json({error: true, message: error.message})
    })
})

//CRIAR UM REGISTRO
router.post("/", async (req, res) => {
    const filme = req.body
    await new Filme(filme).save()
    .then((response) => {
        res.json({error: false, filme: response})
    })
    .catch(error => {
        res.json({error: true, message: error.message})
    })
})

//ATUALIZAR REGISTRO
router.put("/:id", async (req, res) => {
    const id = req.params.id
    const novo_filme = req.body
    await Filme.findByIdAndUpdate(id, novo_filme)
    .then(async () => {
        await Filme.findById(id)
        .then(filme_atualizado => {
            res.json({error: false, filme_atualizado})
        })
        // res.json({error: false, filme})
    })
    .catch(error => {
        res.json({error: true, message: error.message})
    })
})

//DELETAR REGISTRO COM ID
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    await Filme.findByIdAndDelete(id)
    .then(() => {
        res.json({error: false})
    })
    .catch(error => {
        res.json({error: true, message: error.message})
    })

})