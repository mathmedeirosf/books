import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../types/types';

const loadCartFromLocalStorage = (): CartItem[] => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

const initialState: CartState = {
    items: loadCartFromLocalStorage(),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (!existingItem) state.items.push({ ...action.payload, quantity: 1 });

            localStorage.setItem('cart', JSON.stringify(state.items));
        },

        updateCartItemQuantity: (state, action: PayloadAction<{ itemId: number; increment: boolean }>) => {
            const { itemId, increment } = action.payload;
            const itemToUpdate = state.items.find((item) => item.id === itemId);

            if (itemToUpdate) {

                itemToUpdate.quantity = increment ? itemToUpdate.quantity + 1 : Math.max(itemToUpdate.quantity - 1, 0);
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
        },

        removeCartItem: (state, action: PayloadAction<number>) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter((item) => item.id !== itemIdToRemove);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, updateCartItemQuantity, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
