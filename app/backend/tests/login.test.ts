/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'
import { app } from '../src/api/app'
import { loginValid, MAIL_INVALID, MAIL_NOT_FOUND, MAIL_VALID, PASS_INVALID, PASS_INVALID_LENGTH, PASS_VALID, seedsMock } from './mocks'

describe('Verificação de rota de login', () => {
  describe('Verificação de resposta positiva', () => {
    it('Verifica se o login é realizado com sucesso', async () => {
      const response = await request(app).post('/api/users/login').send(loginValid)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('token')
      expect(response.body).toHaveProperty('user')
      expect(response.body.user).toStrictEqual(seedsMock[2])
    })
  })
  describe('Verificação de erros de dados', () => {
    it('Verifica se há erro quando a senha não é correta', async () => {
      const response = await request(app).post('/api/users/login').send({
        email: MAIL_VALID,
        password: PASS_INVALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('Password is incorrect')
    })
    it('Verifica se há erro quando o usuário não existe', async () => {
      const response = await request(app).post('/api/users/login').send({
        email: MAIL_NOT_FOUND,
        password: PASS_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('User does not exist')
    })
  })
  describe('Verificação de erros de campos', () => {
    it('Verifica se há erro quando não é enviado senha', async () => {
      const response = await request(app).post('/api/users/login').send({
        email: MAIL_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"password" is required')
    })
    it('Verifica se há erro quando a senha é fora do padrão de 6 dígitos', async () => {
      const response = await request(app).post('/api/users/login').send({
        email: MAIL_VALID,
        password: PASS_INVALID_LENGTH
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"password" length must be at least 6 characters long')
    })
    it('Verifica se há erro quando não é enviado email', async () => {
      const response = await request(app).post('/api/users/login').send({
        password: PASS_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"email" is required')
    })
    it('Verifica se há erro quando o email é fora do padrão', async () => {
      const response = await request(app).post('/api/users/login').send({
        email: MAIL_INVALID,
        password: PASS_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"email" must be a valid email')
    })
  })
})

