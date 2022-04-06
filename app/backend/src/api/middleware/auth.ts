import { NextFunction, Request, Response } from 'express'
import { BadRequestError, UnauthorizedError } from '../../app/errors'
import { verifyToken } from '../../app/utils'
export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization: token } = req.headers
  if (!token) throw new BadRequestError('Token not found')
  await verifyToken(token)
  next()
}

export const validUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization as string
  const { id } = req.params
  const { id: idToken } = await verifyToken(token)
  if (+id !== idToken) {
    throw new UnauthorizedError('Only the user can delete it')
  }
  next()
}
