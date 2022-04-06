import { UsersModel } from '../models/users.model'

export class UsersService {
  constructor(
    readonly usersModel: UsersModel
  ) { }
}
