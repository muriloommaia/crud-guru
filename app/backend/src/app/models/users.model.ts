import { PrismaUsersModel } from '../../db'
import { Entity, User } from '../domain'
import { UserCreate } from '../interfaces'

export class UsersModel {
  constructor(
    readonly db: PrismaUsersModel
  ) { }

  async getUsers(filter: string, take: number, skip: number): Promise<UserCreate[]> {
    const users = await this.db.getUsers(filter, take, skip)
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

  async count(): Promise<number> {
    const count = await this.db.count()
    return count
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
