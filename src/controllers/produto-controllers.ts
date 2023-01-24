import { Request, Response, NextFunction } from "express"
import { atualizarProduto, buscarProduto, buscarProdutosFavoritos, buscarProdutosFavoritosPorNome, criarProduto, deletarProduto, favoritarProduto, listarProduto, produtosMaisVendidos } from "../services/produto-service"
import { produtoTypes } from "../types"

export const listar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        res.json(await listarProduto())
    } catch (error) {
       return next()
    }
}

export const criar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const produto:produtoTypes = req.body
        res.json( await criarProduto(produto))
    } catch (error) {
       return next()
    }
}

export const atualizar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const id = req.params.id
        const produto:produtoTypes = req.body
        res.json(await atualizarProduto(id, produto))
    } catch (error) {
       return next()
    }
}

export const deletar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const id = req.params.id
        res.json(await deletarProduto(id))
    } catch (error) {
       return next()
    }
}

export const buscar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {nomeDoProduto} = req.body
        res.json(await buscarProduto(nomeDoProduto))
    } catch (error) {
       return next()
    }
}

export const buscarFavoritosPorNome =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {nomeDoProduto} = req.body
        res.json(await buscarProdutosFavoritosPorNome(nomeDoProduto))
    } catch (error) {
       return next()
    }
}

export const buscarFavoritos =async (req:Request, res:Response, next:NextFunction) => {
    try {
        res.json(await buscarProdutosFavoritos())
    } catch (error) {
       return next()
    }
}

export const favoritar =async (req:Request, res:Response, next:NextFunction) => {
    try {
        const id = req.body.id
        res.json(await favoritarProduto(id))
    } catch (error) {
       return next()
    }
}

export const faturamento =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
    } catch (error) {
       return next()
    }
}

export const quantidadeDeVendas =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
    } catch (error) {
       return next()
    }
}

export const maisVendidos =async (req:Request, res:Response, next:NextFunction) => {
    try {
        res.json(await produtosMaisVendidos())
    } catch (error) {
       return next()
    }
}