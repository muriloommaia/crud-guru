import { Request, Response, Router } from 'express'
import { usersFactory } from '../../app/factory'

const userController = usersFactory()

const userRoute = Router()

const read = async (req: Request, res: Response): Promise<void> => {
  const { status, message } = await userController.getAllUsers()
  res.status(status).json(message)
}

const create = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body
  const { status, message } = await userController.createUser({ name, email, password })
  res.status(status).json(message)
}

const deleteU = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const { status } = await userController.deleteUser(+id)
  res.status(status).json({ message: 'User deleted' })
}

userRoute.post('/', create)

userRoute.get('/', read)

userRoute.delete('/:id', deleteU)

export { userRoute }
