import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookState } from "../../types/types";

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
    },
});

export const { getBooks } = bookSlice.actions;
export default bookSlice.reducer;