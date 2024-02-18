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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
