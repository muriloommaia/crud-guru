import { Entity, User } from '../domain'
import { UnauthorizedError } from '../errors'
import { UserCreate } from '../interfaces'
import { UsersModel } from '../models/users.model'
import { encrypt } from '../utils'

export class UsersService {
  constructor(
    readonly usersModel: UsersModel
  ) { }

  async getAllUsers(): Promise<UserCreate[]> {
    const response = await this.usersModel.getAllUsers()
    return response
  }

  async createUser (user: Omit<User, keyof Entity>): Promise<any> {
    const userExist = await this.usersModel.exists(user.email)
    if (userExist) {
      throw new UnauthorizedError('User already exists')
    }
    const password = await encrypt(user.password)
    user.password = password
    const create = await this.usersModel.createUser(user)
    return create
  }

  async deleteUser (id: number): Promise<void> {
    await this.usersModel.delete(id)
  }
}
