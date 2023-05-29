/* eslint-disable prettier/prettier */
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function productRoutes(app: FastifyInstance) {
  app.get('/product', async () => {
    const product = await prisma.products.findMany()
  
    return product
  })

  app.get('/product/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(), // o id é um objeto que espera que seja string
    })

    const { id } = paramsSchema.parse(request.params) // validação para ver se ele segue a estrutura do dado
 
    const product = await prisma.products.findUniqueOrThrow({ 
      where: {
        id,
      }
    })
    return product
  })


  app.delete('/product/:id', async (request) => { 
    const paramsSchema = z.object({
    id: z.string().uuid(), // o id é um objeto que espera que seja string
  })

  const { id } = paramsSchema.parse(request.params)

  await prisma.products.delete({
      where: {
        id,
      }
    })
  })

}