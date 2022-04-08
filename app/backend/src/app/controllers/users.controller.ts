import { usersValidator } from '../../validators'
import { Entity, User } from '../domain'
import { GetUsersType, ResponseController, UserCreate, UserLogin, UserLoginService } from '../interfaces/'
import { UsersService } from '../services/users.service'
export class UsersController {
  constructor(
    readonly userService: UsersService
  ) { }

  async getUsers(filter: string, page: number): Promise<ResponseController<GetUsersType>> {
    filter = filter || ''
    page = page || 1
    const response = await this.userService.getUsers(filter, page)
    return {
      status: 200,
      message: response
    }
  }

  async createUser(user: Omit<User, keyof Entity>): Promise<ResponseController<UserCreate>> {
    const validate = await usersValidator.create(user)
    const create = await this.userService.createUser(validate)
    return { status: 201, message: create }
  }

  async loginUser(user: UserLogin): Promise<ResponseController<UserLoginService>> {
    const validate = await usersValidator.login(user)
    const create = await this.userService.loginUser(validate)
    return { status: 200, message: create }
  }

  async updateUser(id: number, user: Omit<UserCreate, 'id'>): Promise<ResponseController<UserCreate>> {
    const validate = await usersValidator.update(user)
    const updated = await this.userService.updateUser(id, validate)
    return { status: 200, message: updated }
  }

  async updatePass(id: number, password: string): Promise<ResponseController<string>> {
    await usersValidator.updatePass({ password })
    await this.userService.updatePass(id, password)
    return { status: 200, message: 'Password updated' }
  }

  async deleteUser(id: number): Promise<ResponseController<boolean>> {
    await this.userService.deleteUser(id)
    return { status: 204, message: true }
  }
}
