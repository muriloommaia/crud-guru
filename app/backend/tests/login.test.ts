/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'
import { app } from '../src/api/app'

describe('Create User Controller', () => {
  it('Should be able to create a new user', async () => {
    const response = await request(app).get('/api/users')
    console.log(response)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id')
  })
})

