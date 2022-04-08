/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'
import { app } from '../src/api/app'
import { registerResponse, registerValid, seedsMock } from './mocks'

describe('Verificação de rota para retorno dos usuarios', () => {
  describe('Verificação de resposta inicial', () => {
    it('Verifica se, ao acessar a aplicação, existem 12 usuários', async () => {
      const response = await request(app).get('/api/users/')
      expect(response.status).toBe(200)
      expect(response.body.total).toBe(12)
      expect(response.body.users).toStrictEqual(seedsMock)
    })
    it('Verifica se, ao buscar pelo filtro "as" encontra-se seis usuários', async () => {
      const response = await request(app).get('/api/users/?filter=as')
      expect(response.status).toBe(200)
      expect(response.body.total).toBe(6)
    })
    it('Verifica se, ao buscar pelo filtro "gmail.com" encontra-se dois usuários', async () => {
      const response = await request(app).get('/api/users/?filter=gmail.com')
      expect(response.status).toBe(200)
      expect(response.body.total).toBe(2)
    })
  })
  describe('Ao Criar um usuário', () => {
    it('Ao criar um usuário, a quantidade de retorno passa a ser 13', async () => {
      await request(app).post('/api/users/register').send(registerValid)


      const response = await request(app).get('/api/users/')
      expect(response.status).toBe(200)
      expect(response.body.total).toBe(13)
    })
    it('Verifica se, ao buscar pelo filtro "gmail.com" encontra-se três usuários', async () => {
      const response = await request(app).get('/api/users/?filter=gmail.com')
      expect(response.status).toBe(200)
      expect(response.body.total).toBe(3)
      expect(response.body.users).toStrictEqual([seedsMock[0], seedsMock[2], registerResponse])
    })
  })
})

