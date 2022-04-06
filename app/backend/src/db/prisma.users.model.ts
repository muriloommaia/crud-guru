import { Entity, User } from '../app/domain'
import { UserCreate } from '../app/interfaces'
import { prisma } from './client'
export class PrismaUsersModel {
  async getAllUsers(): Promise<UserCreate[]> {
    return await prisma.user.findMany()
  }

  async createUser(user: Omit<User, keyof Entity>): Promise<UserCreate> {
    const { id, name, email } = await prisma.user.create({
      data: user
    })
    return { id, name, email }
  }

  async exists(email: string): Promise<User> {
    const exists = await prisma.user.findUnique({
      where: {
        email
      }
    })
    return exists as User
  }

  async delete(id: number): Promise<void> {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }
}
