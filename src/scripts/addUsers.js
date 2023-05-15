import { database } from "../services/database.js";
import { Usuario } from "../models/usuario.js"

import usuarioJSON from "../data/usuario.json" assert {type: "json"}

function addUsers(){
    usuarioJSON.forEach(async usuario => {
        await new Usuario(usuario).save()
        .then(() => console.log("Usuarios adicionados com sucesso!"))
        .catch(error => {
            console.log("Error"+ error.message)
        })
    })
}

addUsers()