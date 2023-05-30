/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import cors from '@fastify/cors'
import { productRoutes } from './routes/products'

const app = fastify()

app.register(cors, {
  origin: true, // todas urls de front end poderão acessar o nosso backend
})
app.register(productRoutes)

// Porta para o localhost, em ambiente de desenvolvimento

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Assim que meu servidor estiver no ar, eu quero então executar uma função
    console.log('🛒 HTTP server running on http://localhost:3333')
  })
