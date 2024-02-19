import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BookState } from '../../types/types';

const initialState: BookState = {
    books: [],
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getBooks: (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload;
        },

        searchBooksByTitle: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.title.toLowerCase().includes(action.payload.toLowerCase()));
        }
    }
});

export const { getBooks, searchBooksByTitle } = bookSlice.actions;
export default bookSlice.reducer;