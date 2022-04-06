import { Entity, User } from '../app/domain'
import { prisma } from './client'
export class PrismaUsersModel {
  async getAllUsers(): Promise<any> {
    return await prisma.user.findMany()
  }

  async createUser(user: Omit<User, keyof Entity>): Promise<any> {
    const { name, email, password } = user
    return await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
  }
}
