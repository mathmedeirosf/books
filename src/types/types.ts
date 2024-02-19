import { SerializedError } from '@reduxjs/toolkit';

export interface CustomError extends SerializedError {
    status?: number
}

export interface User {
    email: string
    password: string
}

export interface Book {
    id: number,
    title: string,
    authors: [{ name: string }]
    formats: { 'image/jpeg': string }
}

export interface Books {
    results: Book[]
}

export interface BookState {
    books: Book[]
}

export interface BookProps {
    id: number
    title: string
    author: string
    image: string
    price: string
}

export interface CartItem {
    image: string;
    id: number;
    title: string;
    price: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export interface SearchState {
    title: string
}