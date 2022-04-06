import { PrismaUsersModel } from '../../db'
import { Entity, User } from '../domain'

export class UsersModel {
  constructor(
    readonly db: PrismaUsersModel
  ) { }

  async getAllUsers(): Promise<any> {
    return await this.db.getAllUsers()
  }

  async createUser(user: Omit<User, keyof Entity>): Promise<any> {
    const create = await this.db.createUser(user)
    return create
  }
}
