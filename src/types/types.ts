import { SerializedError } from "@reduxjs/toolkit"

export interface CustomError extends SerializedError {
    status?: number
}

export interface User {
    email: string
    password: string
}