// O modelo define os dados dos documentos que vão pertencer a uma coleção

import mongoose, { SchemaType } from "mongoose";
import { Schema, model } from "mongoose";

const veiculoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  placa:{
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7
  },
  cor: {
    type: String,
    enum: ["VERMELHO", "PRETO", "AZUL", "AMARELO"],
    required: true
  },
  categoria: {
    type: String,
    enum: ["CARRO", "VAN", "ONIBUS", "CAMINHÃO"]
  },
  cliente: {
    type: Schema.Types.ObjectId, //referencia ao cliente
    ref: "Cliente",
    required: true
  }
   
  
});

const Veiculo = model("Veiculo", veiculoSchema);

export default Veiculo;
