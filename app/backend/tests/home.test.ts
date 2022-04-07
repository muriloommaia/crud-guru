/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'
import { app } from '../src/api/app'
import { registerResponse, registerValid, seedsMock } from './mocks'

describe('Verificação de rota para retorno dos usuarios', () => {
  describe('Verificação de resposta inicial', () => {
    it('Verifica se, ao acessar a aplicação, existem 4 usuários', async () => {
      const response = await request(app).get('/api/users/')
      expect(response.status).toBe(200)
      expect(response.body.length).toBe(4)
      expect(response.body).toStrictEqual(seedsMock)
    })
    it('Verifica se, ao buscar pelo filtro "as" encontra-se dois usuários', async () => {
      const response = await request(app).get('/api/users/?filter=as')
      expect(response.status).toBe(200)
      expect(response.body.length).toBe(2)
      expect(response.body).toStrictEqual([seedsMock[1], seedsMock[3]])
    })
    it('Verifica se, ao buscar pelo filtro "gmail.com" encontra-se dois usuários', async () => {
      const response = await request(app).get('/api/users/?filter=gmail.com')
      expect(response.status).toBe(200)
      expect(response.body.length).toBe(2)
      expect(response.body).toStrictEqual([seedsMock[0], seedsMock[2]])
    })
  })
  describe('Ao Criar um usuário', () => {
    it('Ao criar um usuário, a quantidade de retorno passa a ser 5', async () => {
      await request(app).post('/api/users/register').send(registerValid)


      const response = await request(app).get('/api/users/')
      expect(response.status).toBe(200)
      expect(response.body.length).toBe(5)
      expect(response.body).toStrictEqual([...seedsMock, registerResponse])
    })
    it('Verifica se, ao buscar pelo filtro "gmail.com" encontra-se três usuários', async () => {
      const response = await request(app).get('/api/users/?filter=gmail.com')
      expect(response.status).toBe(200)
      expect(response.body.length).toBe(3)
      expect(response.body).toStrictEqual([seedsMock[0], seedsMock[2], registerResponse])
    })
  })
})

