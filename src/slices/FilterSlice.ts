
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  preco: number;
  categoria: string;
  id: number;
  votos: number;
}


const initialState: {
  items: Carro[]
  filteredItems: Carro[]
  selectedCategory: string
} = {
  items: [ { id: 1, marca: "Toyota", modelo: "Corolla", ano: 2022, cor: "Prata", preco: 90000, categoria: "Sedan", votos: 0 },
  { id: 2, marca: "Honda", modelo: "Civic", ano: 2021, cor: "Branco", preco: 85000, categoria: "Sedan", votos: 0 },
  { id: 3, marca: "Ford", modelo: "Fusion", ano: 2020, cor: "Preto", preco: 80000, categoria: "Sedan", votos: 0 },
  { id: 4, marca: "Chevrolet", modelo: "Cruze", ano: 2019, cor: "Azul", preco: 75000, categoria: "Hatch", votos: 0 },
  { id: 5, marca: "Volkswagen", modelo: "Polo", ano: 2020, cor: "Preto", preco: 85000, categoria: "Hatch", votos: 0 }],
  filteredItems: [],
  selectedCategory: '',
}

export const listagemSlice = createSlice({
  name: 'listagem',
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      if (action.payload === '') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (item) => item.categoria === action.payload
        );
      }
    },
    updateVotos: (state, action: PayloadAction<Carro[]>) => {
      state.filteredItems = action.payload;
    }
  },
});

export const { filterByCategory, updateVotos } = listagemSlice.actions
export default listagemSlice.reducer