import { PrismaUsersModel } from '../../db'
import { Entity, User } from '../domain'
import { UserCreate } from '../interfaces'

export class UsersModel {
  constructor(
    readonly db: PrismaUsersModel
  ) { }

  async getAllUsers(): Promise<UserCreate[]> {
    return await this.db.getAllUsers()
  }

  async createUser(user: Omit<User, keyof Entity>): Promise<UserCreate> {
    const create = await this.db.createUser(user)
    return create
  }

  async exists(email: string): Promise<boolean> {
    const exists = await this.db.exists(email)
    return exists
  }

  async delete(id: number): Promise<void> {
    await this.db.delete(id)
  }
}
