import { Router } from "express";
import { buscar, buscarFavoritos, buscarFavoritosPorNome, criar, deletar, faturamento, favoritar, listar, maisVendidos, quantidadeDeVendas } from "../controllers/produto-controllers";

export const routeProduct =  Router()

routeProduct.get('/',listar)

routeProduct.get('/favoritos',buscarFavoritos)
routeProduct.get('/maisVendidos',maisVendidos)
routeProduct.put('/favoritos/:id',favoritar)
routeProduct.post('/',criar)
routeProduct.delete('/:id',deletar)
routeProduct.post('/buscarPeloNome',buscar)
routeProduct.post('/buscarFavoritosPeloNome',buscarFavoritosPorNome)
routeProduct.post('/favoritar',favoritar)
routeProduct.get('/faturamento',faturamento)
routeProduct.get('/quantidadeDeVendas',quantidadeDeVendas)
export default routeProduct