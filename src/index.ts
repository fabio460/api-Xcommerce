import express  from "express";
import cors from 'cors'
import { routes } from "./rotas";
const app  = express()
app.use(express.json())
app.use(cors())
routes.forEach(elem=>{
   return app.use(elem.endpoint,elem.router)
})

app.listen(4000,()=>{console.log('servidor rodando na porta 4000 ...')})
