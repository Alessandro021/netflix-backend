import mongoose from "mongoose"

export const Episodio = mongoose.model("Episodio", {
      temporada_id : {
        type: mongoose.Types.ObjectId,
        ref: "Temporada"
      },
      titulo: {
        type: String,
        required: true
      },
      descricao: {
        type: String,
        required: true
      },
      numero: {
        type: Number,
        required: true
      },
      capa: {
        type: String,
        required: true
      },
})