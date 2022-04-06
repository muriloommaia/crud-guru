import { Entity, User } from '../app/domain'
import { prisma } from './client'
export class PrismaUsersModel {
  async getAllUsers(): Promise<any> {
    return await prisma.user.findMany()
  }

  async createUser(user: Omit<User, keyof Entity>): Promise<any> {
    const { id, name, email } = await prisma.user.create({
      data: user
    })
    return { id, name, email }
  }

  async exists(email: string): Promise<boolean> {
    const exists = await prisma.user.findUnique({
      where: {
        email
      }
    })
    return !!exists
  }
}
