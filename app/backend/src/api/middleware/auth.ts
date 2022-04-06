import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../../app/errors'
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
