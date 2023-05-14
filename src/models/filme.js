import mongoose from "mongoose"

export const Filme = mongoose.model("Filme", {
   titulo:{ 
        type: String,
        required: true
    },
   atores: {
        type: Array,
        required: true
   },
   ano: {
        type: Number,
        required: true
   },
   detalhes: {
        type: Object,
        required: true
   },
   premiacoes: {
        type: [Object],
        required: true
   },
})