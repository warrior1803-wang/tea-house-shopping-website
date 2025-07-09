import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/lib/products';

export type CartItem = {
  product: Product;
  quantity: number;
};

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const existing = state.items.find(item => item.product.slug === action.payload.product.slug);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push({ product: action.payload.product, quantity: action.payload.quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.product.slug !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ slug: string; quantity: number }>) => {
      const item = state.items.find(item => item.product.slug === action.payload.slug);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 