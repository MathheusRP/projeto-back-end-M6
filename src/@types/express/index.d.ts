import * as express from 'express'

declare global {
    namespace Express {
        interface Request {
            user: {
                id: number,
                is_admin: boolean
            }
        }
    }
}