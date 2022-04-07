import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// todas as senhas são 123456

const usersMap = [
  {
    name: 'Murilo Maia',
    email: 'muriloommaia@gmail.com',
    password: '$2a$10$ecpU91vU02C.K66SIDuosuph1oW4XExd7zMuUxwF1CpNJXdVVbxN.'
  },
  {
    name: 'Lucas Santos',
    email: 'lucas@teste.com',
    password: '$2a$10$wN/xnvY/VTnLXE3g2EKZG.CcPyTuYuC6jkpUbtDyGmhlOwXHcE9G6'
  },
  {
    name: 'André Silva',
    email: 'andresilva@gmail.com',
    password: '$2a$10$vGh2zP8701d27uj42pcH9.H7vUsuTBQSGw2c9NFxokn7c/fzkfzOS'
  },
  {
    name: 'Michael Caxias',
    email: 'micha@teste.com',
    password: '$2a$10$wEXLgVq.pwsM1eoiAER91eNhVx4ViPlNw3XwfWNZgXjhl7t//el32'
  }
]

async function main(): Promise<void> {
  console.log('Start seeding ...')
  for (const u of usersMap) {
    const user = await prisma.user.create({
      data: u
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
