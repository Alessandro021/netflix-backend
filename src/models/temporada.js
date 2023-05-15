import mongoose from "mongoose"

export const Temporada = mongoose.model("Temporada", {
      filme_id : {
        type: mongoose.Types.ObjectId,
        ref: "Filme"
      },
      titulo : {
        type: String,
        required: true
      },
})