import { usersValidator } from '../../validators'
import { Entity, User } from '../domain'
import { UsersService } from '../services/users.service'
type ResponseController<T> = {
  status: number
  message: T
}

type UserCreate = {
  id: number
  name: string
  email: string
}
export class UsersController {
  constructor(
    readonly userService: UsersService
  ) { }

  async createUser(user: Omit<User, keyof Entity>): Promise<ResponseController<UserCreate>> {
    const validate = await usersValidator.create(user)
    const create = await this.userService.createUser(validate)
    return { status: 201, message: create }
  }
}
