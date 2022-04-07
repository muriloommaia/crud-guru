import { NextFunction, Request, Response } from 'express'

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction): any => {
  const { name, message } = err
  switch (name) {
    case 'BadRequestError': return res.status(400).json({ message })
    case 'JsonWebTokenError': return res.status(400).json({ message })
    case 'TokenExpiredError': return res.status(400).json({ message })
    case 'ValidationError': return res.status(401).json({ message })
    case 'UnauthorizedError': return res.status(401).json({ message })
    default: return res.status(500).json({ message: 'Something went wrong' })
  }
}

export { errorMiddleware }
