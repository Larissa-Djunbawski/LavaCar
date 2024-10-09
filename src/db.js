// Cria conexão com o banco de dados
import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("conectado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

)()