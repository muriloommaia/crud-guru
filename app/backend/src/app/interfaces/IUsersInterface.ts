export type ResponseController<T> = {
  status: number
  message: T
}

export type UserCreate = {
  id: number
  name: string
  email: string
}
