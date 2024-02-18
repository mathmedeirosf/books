import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/user";
import { bookApi } from "../services/book";
import cartReducer from './slices/CartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [userApi.reducerPath]: userApi.reducer,
        [bookApi.reducerPath]: bookApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;