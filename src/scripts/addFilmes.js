import { database } from "../services/database.js";
import { Filme } from "../models/filme.js";

import filmeJSON from "../data/filme.json" assert {type: "json"}

function addFilmes(){
    filmeJSON.forEach(async usuario => {
        await new Filme(usuario).save()
        .then(() => console.log(`Filme ${usuario.titulo} adicionado com sucesso!`))
        .catch(error => {
            console.log("Error"+ error.message)
        })
    })
}

addFilmes()