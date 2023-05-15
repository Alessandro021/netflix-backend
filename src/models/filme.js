import mongoose from "mongoose"

export const Filme = mongoose.model("Filme", {
    titulo:{ 
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    capa: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        // required: true
    },
    thumb: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true,
    },
    // ano: {
    //     type: Number,
    //     required: true
    // },
    elenco: {
        type: Array,
        required: true,
    },
    generos: {
        type: Array,
        required: true,
    },
    cenas_momentos: {
        type: Array,
        required: true,
    },
//    atores: {
//         type: Array,
//         required: true
//    },
//    ano: {
//         type: Number,
//         required: true
//    },
//    detalhes: {
//         type: Object,
//         required: true
//    },
//    premiacoes: {
//         type: [Object],
//         required: true
//    },
})