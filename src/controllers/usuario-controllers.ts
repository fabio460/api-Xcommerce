import { Request, Response, NextFunction } from "express"
import { listarProduto } from "../services/produto-service"

export const listar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        res.json(await listarProduto())
    } catch (error) {
       return next()
    }
}

export const criar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
    } catch (error) {
       return next()
    }
}
export const deletar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
    } catch (error) {
       return next()
    }
}

export const buscar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
    } catch (error) {
       return next()
    }
}




