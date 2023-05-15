import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()

export const database = mongoose.connect(process.env.URL_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Sucesso ao conectar ao banco de dados MongoDB')
    }).catch((error) => {
        console.log(`Erro ao conectar ao banco de dados MongoDB: ${error}`)
    })
    
    // .finally(() => {
    //     mongoose.connection.close()
    // })
