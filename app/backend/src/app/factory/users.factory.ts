import { PrismaUsersModel } from '../../db'
import { UsersController } from '../controllers/users.controller'
import { UsersModel } from '../models/users.model'
import { UsersService } from '../services/users.service'

export const usersFactory = async (): Promise<UsersController> => {
  const userRepository = new PrismaUsersModel()
  const userModel = new UsersModel(userRepository)
  const userService = new UsersService(userModel)
  const userController = new UsersController(userService)
  return userController
}
