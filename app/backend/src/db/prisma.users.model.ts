import { prisma } from './client'
export class PrismaUsersModel {
  async getAllUsers(): Promise<any> {
    return await prisma.user.findMany()
  }
}
