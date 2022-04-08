import { Request, Response, Router } from 'express'
import { usersFactory } from '../../app/factory'
import { authenticateToken, validUser } from '../middleware/auth'

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
  const { page, filter } = req.query as { page: string, filter: string }
  const { status, message } = await userController.getUsers(filter, +page)
  res.status(status).json(message)
}


const update = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body
  const { id } = req.params
  const { status, message } = await userController.updateUser(+id, { name, email })
  res.status(status).json(message)
}

const updatePass = async (req: Request, res: Response): Promise<void> => {
  const { password } = req.body
  const { id } = req.params
  const { status, message } = await userController.updatePass(+id, password)
  res.status(status).json(message)
}

const deleteU = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const { status } = await userController.deleteUser(+id)
  res.status(status).end()
}

userRoute.post('/register', create)

userRoute.post('/login', login)

userRoute.get('/', read)

// Validação de token jwt, deve estar no header
userRoute.use(authenticateToken)

// Validação se o usuário tem permissão para as alterações
userRoute.put('/:id/update/pass', validUser, updatePass)

userRoute.put('/:id/update', validUser, update)

userRoute.delete('/:id/delete', validUser, deleteU)

export { userRoute }
