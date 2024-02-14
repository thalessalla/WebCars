import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface Carro {
  id: number;
  modelo: string;
  preco: number;
}

interface CartState {
  items: Carro[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Carro>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;