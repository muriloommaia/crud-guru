import 'dotenv/config'
import * as jwt from 'jsonwebtoken'
import { UserCreate } from '../interfaces'

const secret = process.env.SECRET_JWT as string
export const generateToken = async (user: Omit<UserCreate, 'password'>): Promise<string> => {
  const token = jwt.sign(user, secret, {
    expiresIn: '10d'
  })
  return token
}

export const verifyToken = async (token: string): Promise<Omit<UserCreate, 'password'>> => {
  const tokenGenerate = jwt.verify(token, secret) as Omit<UserCreate, 'password'>
  return tokenGenerate
}
