import { Entity, User } from '../app/domain'
import { UserCreate } from '../app/interfaces'
import { prisma } from './client'
export class PrismaUsersModel {
  async getUsers(filter: string): Promise<UserCreate[]> {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              contains: filter
            }
          },
          {
            name: {
              contains: filter
            }
          }
        ]
      }
    })
    return users
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

  async updateUser(id: number, user: Omit<UserCreate, 'id'>): Promise<UserCreate> {
    const { id: userId, name, email } = await prisma.user.update({
      where: {
        id
      },
      data: user
    })
    return { id: userId, name, email }
  }

  async updatePass(id: number, password: string): Promise<void> {
    await prisma.user.update({
      where: {
        id
      },
      data: {
        password
      }
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }
}
