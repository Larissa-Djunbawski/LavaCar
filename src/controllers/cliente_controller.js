// Define a implementação de um serviço
import Cliente from "../models/cliente_model.js"

export const store = async (req,res) => {
    try {
        await Cliente.create(req.body)
        res.status(201).json()
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}
export const index = async (req,res) => {
    try {
        await Cliente.find().exec()
        res.json(content)
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}
export const show = async (req,res) => {
    try {
        await Cliente.findById(req.params.id).exec()
        res.json(content)
    
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

export const update = async (req,res) => {
    try {
        await Cliente.findByIdAndUpdate(req.params.id).exec()
        res.json(content)
    
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}
export const destroy = async (req,res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

