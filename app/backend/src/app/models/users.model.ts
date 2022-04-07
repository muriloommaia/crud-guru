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

  async getByFilter(filter: string): Promise<UserCreate[]> {
    const users = await this.db.getByFilter(filter)
    return users
  }

  async createUser(user: Omit<User, keyof Entity>): Promise<UserCreate> {
    const create = await this.db.createUser(user)
    return create
  }

  async exists(email: string): Promise<User> {
    const exists = await this.db.exists(email)
    return exists
  }

  async updateUser(id: number, user: Omit<UserCreate, 'id'>): Promise<UserCreate> {
    const update = await this.db.updateUser(id, user)
    return update
  }

  async updatePass(id: number, password: string): Promise<void> {
    await this.db.updatePass(id, password)
  }

  async delete(id: number): Promise<void> {
    await this.db.delete(id)
  }
}
