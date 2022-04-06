// entities

export type Indexable = {
  id: number
}

export type Entity = Indexable & {
  createdAt: Date
  updatedAt?: Date
}

export type User = Entity & {
  email: string
  password: string
  name: string
}

export type UserLogin = {
  email: string
  password: string
}
