import { Entity, User } from '../domain'
import { UsersService } from '../services/users.service'

export class UsersController {
  constructor(
    readonly userService: UsersService
  ) { }

  async createUser(user: Omit<User, keyof Entity>): Promise<any> {
    const create = await this.userService.createUser(user)
    return create
  }
}
