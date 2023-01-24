import { Router } from "express";

export interface rotaType{
    endpoint: string,
    router: Router
}

export interface produtoTypes{
    id:string,
    name: string,
    code: string,
    sales: number,
    price: number,
    stock: number,
    image: string,
    favorite: boolean
}