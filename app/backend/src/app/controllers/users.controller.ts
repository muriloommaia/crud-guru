import { usersValidator } from '../../validators'
import { Entity, User } from '../domain'
import { ResponseController, UserCreate } from '../interfaces/'
import { UsersService } from '../services/users.service'
export class UsersController {
  constructor(
    readonly userService: UsersService
  ) { }

  async getAllUsers(): Promise<ResponseController<Array<Omit<UserCreate, 'id'>>>> {
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
}
