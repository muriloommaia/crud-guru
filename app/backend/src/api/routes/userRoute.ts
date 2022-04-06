import { Request, Response, Router } from 'express'
import { usersFactory } from '../../app/factory'

const userController = usersFactory()

const userRoute = Router()

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const { status, message } = await userController.getAllUsers()
  res.status(status).json(message)
}

const create = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body
  const { status, message } = await userController.createUser({ name, email, password })
  res.status(status).json(message)
}

userRoute.get('/', getAllUsers)

userRoute.post('/', create)

export { userRoute }
