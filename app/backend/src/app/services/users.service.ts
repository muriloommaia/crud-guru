import { Entity, User } from '../domain'
import { UsersModel } from '../models/users.model'

export class UsersService {
  constructor(
    readonly usersModel: UsersModel
  ) { }

  async createUser (user: Omit<User, keyof Entity>): Promise<any> {
    const create = await this.usersModel.createUser(user)
    return create
  }
}
