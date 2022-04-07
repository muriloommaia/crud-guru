/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'
import { app } from '../src/api/app'
import { INVALID_SIGNATURE, loginValid, TOKEN_EXPIRED } from './mocks'

describe('Verificação de rota update', () => {
  describe('Verificação de erros', () => {
    it('Verifica que é impossível deletar uma rota sem um token', async () => {
      const response = await request(app).delete('/api/users/0/delete')
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('Token not found')
    })
    it('Verifica que é impossível deletar uma rota com um token de assinatura invalida', async () => {
      const response = await request(app)
        .delete('/api/users/0/delete')
        .set('Authorization', INVALID_SIGNATURE)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('invalid signature')
    })
    it('Verifica que é impossível deletar uma rota com um token expirado', async () => {
      const response = await request(app)
        .delete('/api/users/0/delete')
        .set('Authorization', TOKEN_EXPIRED)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('jwt expired')
    })
  })
  describe('Verificação de não autorização', () => {
    it('Verifica se não é possível deletar um usuário diferente do logado', async () => {
      const login = await request(app).post('/api/users/login').send(loginValid)
      const response = await request(app)
        .delete('/api/users/5/delete')
        .set('Authorization', login.body.token)
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('Only the user can do this')
    })
  })
  describe('Verificação de sucesso', () => {
    it('Verifica que é possível deletar o usuário', async () => {
      const login = await request(app).post('/api/users/login').send(loginValid)
      const response = await request(app)
        .delete('/api/users/1/delete')

        .set('Authorization', login.body.token)
      expect(response.status).toBe(204)
    })
  })
})

