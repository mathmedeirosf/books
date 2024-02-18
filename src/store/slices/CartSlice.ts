import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  image: string;
  id: number;
  title: string;
  price: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

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
  },
});

export const { addToCart, updateCartItemQuantity, removeCartItem  } = cartSlice.actions;
export default cartSlice.reducer;
