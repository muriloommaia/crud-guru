import { Request, Response, Router } from 'express'

const userRoute = Router()

const get = async (req: Request, res: Response): Promise<void> => {
  res.send('get')
}

userRoute.get('/', get)

export { userRoute }
