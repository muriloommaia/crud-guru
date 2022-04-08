import { Entity, User } from '../domain'
import { UnauthorizedError } from '../errors'
import { GetUsersType, UserCreate, UserLogin, UserLoginService } from '../interfaces'
import { UsersModel } from '../models/users.model'
import { decryptPass, encrypt, generateToken } from '../utils'

export class UsersService {
  constructor(
    readonly usersModel: UsersModel
  ) { }

  async getUsers(filter: string, page: number): Promise<GetUsersType> {
    const take = 8
    const skip = take * (page - 1)
    const response = await this.usersModel.getUsers(filter, take, skip)
    const users = response.map(({ name, id, email }) => ({ id, name, email }))
    const total = await this.usersModel.getUsers(filter, 200, 0)
    return {
      users,
      total: total.length
    }
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

  async loginUser(user: UserLogin): Promise<UserLoginService> {
    const userExist = await this.usersModel.exists(user.email)
    if (!userExist) {
      throw new UnauthorizedError('User does not exist')
    }
    const password = await decryptPass(user.password, userExist.password)
    if (!password) {
      throw new UnauthorizedError('Password is incorrect')
    }
    const token = await generateToken(userExist)
    return {
      user: {
        id: userExist.id,
        name: userExist.name,
        email: userExist.email
      },
      token
    }
  }

  async updateUser(id: number, user: Omit<UserCreate, 'id'>): Promise<UserCreate> {
    const userExist = await this.usersModel.exists(user.email)
    if (userExist && userExist.id !== id) {
      throw new UnauthorizedError('User already exists, change the mail')
    }
    const update = await this.usersModel.updateUser(id, user)
    return update
  }

  // async updatePass(id: number, password: string): Promise<void> {
  //   const encryptPass = await encrypt(password)
  //   await this.usersModel.updatePass(id, encryptPass)
  // }

  async deleteUser (id: number): Promise<void> {
    await this.usersModel.delete(id)
  }
}
