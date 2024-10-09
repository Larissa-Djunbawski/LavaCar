// O modelo define os dados dos documentos que vão pertencer a uma coleção

import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    validator: {
      validate(v) {
        return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]/.text(v);
      },
    },
  },
});

const Cliente = model("Cliente", clienteSchema);

export default Cliente;
