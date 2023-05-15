import { database } from "../services/database.js";
import { Filme } from "../models/filme.js"
import { Temporada } from "../models/temporada.js"
import { Episodio} from "../models/episodio.js"

async function addTemporadasEpisodios(){
    try {
    const series = await Filme.find({ tipo: "serie"}).select("_id")
    for(let serie of series){
        console.log(`FILME ${serie} -----`)
        const numTemporadas = Math.floor(Math.random() * 5) + 1

        for(let i = 1; i <= numTemporadas; i++){
            console.log(`Inserindo temporada ${i} de ${numTemporadas}`)
            const temporada =  await new Temporada({
                filme_id : serie,
                titulo: `Temporada ${i}`
            }).save()

            const numEpisodios = Math.floor(Math.random() * 5) + 1

            for(let x = 1; x <= numEpisodios; x++){
                console.log(`Inserindo Episodio ${x} de ${numEpisodios}`)
                await new Episodio({
                    temporada_id: temporada._id,
                    titulo: `Episodio ${x}`,
                    numero: x,
                    descricao: "Os personagens enfrentam um novo desafio, trabalham juntos para superá-lo, resolvem o problema principal no final e deixam algumas pistas para o que pode acontecer nos próximos episódios ou temporadas.",
                    capa: "https://picsum.photos/300/200" //gere imagens randomicas
                }).save()
            }
        }
    }
        
    } catch (error) {
        console.log(error.message)
    }
     
}

addTemporadasEpisodios()

// await Filme.find({ tipo: "serie"}).select("_id")
// .then( async serie => {
//     console.log(`FILME ${serie} -----`)
//     const numTemporadas = Math.floor(Math.random() * 5) + 1
//     const numEpisodios = Math.floor(Math.random() * 5) + 1

//     for(let i = 1; i <= numTemporadas; i++){
//         console.log(`Inserindo temporada ${i} de ${numTemporadas}`)
//         await new Temporada({
//             filme_id : serie,
//             titulo: `Temporada ${i}`
//         }).save()
//         .then(async temporada => {
//             for(let x = 1; x <= numEpisodios; x++){
//                 console.log(`Inserindo Episodio ${x} de ${numEpisodios}`)
//                 await new Episodio({
//                     temporada: temporada._id,
//                     titulo: `Episodio ${x}`,
//                     numero: x,
//                     descricao: "Os personagens enfrentam um novo desafio, trabalham juntos para superá-lo, resolvem o problema principal no final e deixam algumas pistas para o que pode acontecer nos próximos episódios ou temporadas.",
//                     capa: "https://picsum.photos/300/200" //gere imagens randomicas
//                 }).save()
//                 .then()
//                 .catch(error => ("Erro episodio: " + error.message))
//             }
//         })
//         .catch(error => console.log("Erro Temporada: " + error.message))
//     }
// })
// .catch(error => console.log("Erro 1: " + error.message))
 
// }

