import { Request, Response, Router } from 'express'
import { usersFactory } from '../../app/factory'

const userController = usersFactory()

const userRoute = Router()

const create = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body
  const { status, message } = await userController.createUser({ name, email, password })
  res.status(status).json(message)
}

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body
  const { status, message } = await userController.loginUser({ email, password })
  res.status(status).json(message)
}

const read = async (req: Request, res: Response): Promise<void> => {
  const { status, message } = await userController.getAllUsers()
  res.status(status).json(message)
}

// const update = async (req: Request, res: Response): Promise<void> => {
//   const { name, email, password } = req.body
//   const { status, message } = await userController.updateUser({ name, email, password })
//   res.status(status).json(message)
// }

const deleteU = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const { status } = await userController.deleteUser(+id)
  res.status(status).end()
}

userRoute.post('/register', create)

userRoute.post('/login', login)

userRoute.get('/', read)

// userRoute.put('/:id', update)

userRoute.delete('/:id/delete', deleteU)

export { userRoute }
