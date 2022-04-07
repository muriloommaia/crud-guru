/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest'
import { app } from '../src/api/app'
import { MAIL_INVALID, MAIL_NOT_FOUND, MAIL_VALID, NAME_INVALID, NAME_VALID, PASS_INVALID_LENGTH, PASS_VALID, registerResponse, registerValid } from './mocks'

describe('Verificação de rota de registro (/register)', () => {
  describe('Verificação de resposta positiva', () => {
    it('Verifica se o usuário é cadastrado com', async () => {
      const response = await request(app).post('/api/users/register').send(registerValid)
      expect(response.status).toBe(201)
      expect(response.body).toStrictEqual(registerResponse)
    })
  })
  describe('Verificação de erros de dados', () => {
    it('Verifica se há erro quando o usuário já existe', async () => {
      const response = await request(app).post('/api/users/register').send({
        email: MAIL_VALID,
        name: NAME_VALID,
        password: PASS_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('User already exists')
    })
  })
  describe('Verificação de erros de campos', () => {
    it('Verifica se há erro quando não é enviado senha', async () => {
      const response = await request(app).post('/api/users/register').send({
        email: MAIL_VALID,
        name: NAME_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"password" is required')
    })
    it('Verifica se há erro quando a senha é fora do padrão de 6 dígitos', async () => {
      const response = await request(app).post('/api/users/register').send({
        email: MAIL_NOT_FOUND,
        password: PASS_INVALID_LENGTH,
        name: NAME_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"password" length must be at least 6 characters long')
    })
    it('Verifica se há erro quando não é enviado email', async () => {
      const response = await request(app).post('/api/users/register').send({
        password: PASS_VALID,
        name: NAME_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"email" is required')
    })
    it('Verifica se há erro quando o email é fora do padrão', async () => {
      const response = await request(app).post('/api/users/register').send({
        email: MAIL_INVALID,
        password: PASS_VALID,
        name: NAME_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"email" must be a valid email')
    })
    it('Verifica se há erro quando não é enviado name', async () => {
      const response = await request(app).post('/api/users/register').send({
        password: PASS_VALID,
        email: MAIL_VALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"name" is required')
    })
    it('Verifica se há erro quando o name é fora do padrão', async () => {
      const response = await request(app).post('/api/users/register').send({
        email: MAIL_VALID,
        password: PASS_VALID,
        name: NAME_INVALID
      })
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe('"name" length must be at least 4 characters long')
    })
  })
})

