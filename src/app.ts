import 'express-async-errors'
import express, { Application } from 'express'
import { userRoutes } from './routes/user.routes'
import { handleErrors } from './errors/handleError'
import { loginRouter } from './routes/login.routes'
import { contacsRoutes } from './routes/contact.routes'
import cors from 'cors'

const app: Application = express()

app.use(express.json())

app.use(cors())

app.use('/users', userRoutes)
app.use('/login', loginRouter)
app.use('/contacts', contacsRoutes)

app.use(handleErrors)

export default app

