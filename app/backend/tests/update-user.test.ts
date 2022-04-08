/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'
import { app } from '../src/api/app'
import { correctUpdate, incorrectUpdate, INVALID_SIGNATURE, loginValid, TOKEN_EXPIRED } from './mocks'

describe('Verificação de rota update', () => {
  describe('Verificação de erros', () => {
    it('Verifica que é impossível alterar uma rota sem um token', async () => {
      const response = await request(app).put('/api/users/0/update').send(correctUpdate)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('Token not found')
    })
    it('Verifica que é impossível alterar uma rota com um token de assinatura invalida', async () => {
      const response = await request(app)
        .put('/api/users/0/update')
        .send(correctUpdate)
        .set('Authorization', INVALID_SIGNATURE)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('invalid signature')
    })
    it('Verifica que é impossível alterar uma rota com um token expirado', async () => {
      const response = await request(app)
        .put('/api/users/0/update')
        .send(correctUpdate)
        .set('Authorization', TOKEN_EXPIRED)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('jwt expired')
    })
  })
  describe('Verificação de não autorização', () => {
    it('Verifica se não é possível atualizar um usuário diferente do logado', async () => {
      const login = await request(app).post('/api/users/login').send(loginValid)
      const response = await request(app)
        .put('/api/users/5/update')
        .send(correctUpdate)
        .set('Authorization', login.body.token)
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('Only the user can do this')
    })
    it('Verifica se não é possível atualizar com um email ja existente', async () => {
      const login = await request(app).post('/api/users/login').send(loginValid)
      const response = await request(app)
        .put('/api/users/7/update')
        .send(incorrectUpdate)
        .set('Authorization', login.body.token)
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('User already exists, change the mail')
    })
  })
  describe('Verificação de sucesso', () => {
    it('Verifica que é possível alterar o usuário', async () => {
      const login = await request(app).post('/api/users/login').send(loginValid)
      const response = await request(app)
        .put('/api/users/7/update')
        .send(correctUpdate)
        .set('Authorization', login.body.token)
      expect(response.status).toBe(200)
      expect(response.body).toStrictEqual({ id: 7, ...correctUpdate })
    })
  })
})

