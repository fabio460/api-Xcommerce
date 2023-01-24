import { PrismaClient } from "@prisma/client";
import { produtoTypes } from "../types";

const prisma = new PrismaClient()

export const listarProduto =async () => {
    try {
        return await prisma.produto.findMany({
            orderBy:{name:'asc'}
        })
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}

export const produtosMaisVendidos =async () => {
    try {
       
        return await prisma.produto.findMany({
            orderBy:{
                sales:'desc'
            }
        })
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}

export const criarProduto =async (produto:produtoTypes) => {
    try {
       const p = await prisma.produto.create({
            data:{
                name:produto.name,
                price:produto.price,
                code:produto.code,
                sales:produto.sales,
                stock:produto.stock,
                image:produto.image,
                favorite:produto.favorite || false
            }
        })
        return p
    
    } catch (error) {
         throw new Error("falha ao criar produto: "+error);
    }
}

export const atualizarProduto =async (id:string, produto:produtoTypes) => {
    try {
        const p = await prisma.produto.update({
           where:{
            id
           },
           data:{
            name:produto.name,
            price:produto.price,
            code:produto.code,
            sales:produto.sales,
            stock:produto.stock,
            image:produto.image,
            favorite:produto.favorite
           }
        })
        return p
    } catch (error) {
         throw new Error("falha ao deletar produto: "+error);
    }
}

export const deletarProduto =async (id:string) => {
    try {
        const p = await prisma.produto.delete({
           where:{
            id
           }
        })
        return p
    } catch (error) {
         throw new Error("falha ao deletar produto: "+error);
    }
}

export const buscarProduto =async (nome:string) => {
    try {
        const p = await prisma.produto.findMany({
            where:{
                name:{
                    contains:nome
                }
            }
        })
        return p
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}

export const buscarProdutosFavoritosPorNome =async (nome:string) => {
    try {
        const p = await prisma.produto.findMany({
            where:{
                name:{
                    contains:nome,
                },
                favorite:true
            }
        })
        return p
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}

export const buscarProdutosFavoritos =async () => {
    try {
        const p = await prisma.produto.findMany({
            where:{
                favorite:true
            }
        })
        return p
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}

export const favoritarProduto =async (id:string) => {
    try {
        const favorito = await prisma.produto.findUnique({
            where:{
               id 
            },
            select:{
                favorite:true
            }
        })
        const p = await prisma.produto.update({
            where:{
                id
            },
            data:{
                favorite:!favorito?.favorite
            }
        })
        return p
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}

export const faturamentoDoProduto =async () => {
    try {
        
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}

export const vendasDoProduto =async () => {
    try {
        
    } catch (error) {
         throw new Error("falha ao listar produto: "+error);
    }
}