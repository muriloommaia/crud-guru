import { usersValidator } from '../../validators'
import { Entity, User, UserLogin } from '../domain'
import { ResponseController, UserCreate } from '../interfaces/'
import { UsersService } from '../services/users.service'
export class UsersController {
  constructor(
    readonly userService: UsersService
  ) { }

  async getAllUsers(): Promise<ResponseController<UserCreate[]>> {
    const response = await this.userService.getAllUsers()
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

  async loginUser(user: UserLogin): Promise<ResponseController<string>> {
    const validate = await usersValidator.login(user)
    const create = await this.userService.loginUser(validate)
    return { status: 200, message: create }
  }

  async deleteUser(id: number): Promise<ResponseController<boolean>> {
    await this.userService.deleteUser(id)
    return { status: 204, message: true }
  }
}
