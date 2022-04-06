import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import { errorMiddleware } from './middleware'
import { userRoute } from './routes/userRoute'


const app = express()

app.use(express.json())

app.use('/api/users', userRoute)

app.use(errorMiddleware)

export { app }
