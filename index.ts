import express  from "express";
import cors from 'cors'

const app  = express()

app.get('/',(req,res)=>{
    res.send('ola mundo')
})

app.listen(4000,()=>{console.log('servidor rodando na porta 4000 ...')})
