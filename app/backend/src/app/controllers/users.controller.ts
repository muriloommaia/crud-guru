import { usersValidator } from '../../validators'
import { Entity, User } from '../domain'
import { UsersService } from '../services/users.service'

export class UsersController {
  constructor(
    readonly userService: UsersService
  ) { }

  async createUser(user: Omit<User, keyof Entity>): Promise<any> {
    const validate = await usersValidator.create(user)
    const create = await this.userService.createUser(validate)
    return create
  }
}
