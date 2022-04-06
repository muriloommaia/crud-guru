import { UsersService } from '../services/users.service'

export class UsersController {
  constructor(
    readonly userService: UsersService
  ) { }
}
