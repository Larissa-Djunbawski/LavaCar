// Define a implementação de um serviço
import Veiculo from "../models/veiculo_model.js";

export const store = async (req, res) => {
  try {
    await Veiculo.create(req.body);
    res.status(201).json();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const index = async (req, res) => {
  try {
    await Veiculo.find(req.query).exec(); //filtrar por um id especifico
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const show = async (req, res) => {
  try {
    await Veiculo.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    await Veiculo.findByIdAndUpdate(req.params.id).populate("cliente").exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const destroy = async (req, res) => {
  try {
    await Veiculo.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
