import { PrismaUsersModel } from '../../db'

export class UsersModel {
  constructor(
    readonly db: PrismaUsersModel
  ) { }

  async getAllUsers(): Promise<any> {
    return await this.db.getAllUsers()
  }
}
