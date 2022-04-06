export type ResponseController<T> = {
  status: number
  message: T
}

export type UserCreate = {
  id: number
  name: string
  email: string
}

export type UserLogin = {
  email: string
  password: string
}

export type UserLoginService = {
  user: UserCreate
  token: string
}
