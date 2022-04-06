import Joi from 'joi'
import { Entity, User } from '../app/domain'

export const usersValidator = {
  async create(value: any): Promise<Omit<User, keyof Entity>> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      password: Joi.string().min(6).required()
    })
    const result = await schema.validateAsync(value)
    return result
  }
}
