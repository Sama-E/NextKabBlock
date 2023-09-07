import { PrismaClient } from '@prisma/client'

//To prevent creating multiple clients during CRUD operations 
let prisma
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma;