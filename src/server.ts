import app from './app'
import { AppDataSource } from './data-source'
import { Request, Response, NextFunction } from 'express'

AppDataSource.initialize().then(() => {
    console.log('Database connected!')

    app.listen(3001, () => {
        console.log('Server is running!')
    })
}).catch(err => {
    console.log(err)
})

