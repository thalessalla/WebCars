
import { configureStore } from '@reduxjs/toolkit';
import listagemSlice from "../slices/FilterSlice";
import cartSlice from "../slices/CartSlices"


const store = configureStore({
  reducer: {
    listagem: listagemSlice,
    cart: cartSlice,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;