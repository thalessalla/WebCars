
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { filterByCategory, updateVotos } from '../slices/FilterSlice'
import { Carro } from '../slices/FilterSlice'
import { addItem } from "../slices/CartSlices"
import "./carList.css"
import logo from "../../src/assets/Logo.svg"
import car from "../../src/assets/car.svg"


const Listagem: React.FC = () => {

  // Filtro

  const [categoryFilter, setCategoryFilter] = useState<string>("")

  const filteredItems = useSelector(
    (state: RootState) => state.listagem.filteredItems
  )
  const dispatch = useDispatch()

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value
    dispatch(filterByCategory(selectedCategory))
    setCategoryFilter(selectedCategory)
  }



  //Votação
  const handleVote = (carroId: number) => {
    const carro = filteredItems.find(item => item.id === carroId);
    if (carro) {
      const updatedItems = filteredItems.map(item =>
        item.id === carroId ? { ...item, votos: item.votos + 1 } : item
      );
      dispatch(updateVotos(updatedItems));
    }
  };


  ///Carrinho de compras


  const handleAddToCart = (item: Carro) => {
    dispatch(addItem(item));
  };
 

  return (
    <>
    <section className='container-main'>
    <div>
      <img src={logo} alt="Logo da marca" />
      <select
        id="categoryFilter"
        value={categoryFilter}
        onChange={handleCategoryChange}
        aria-label="Seleciona a categoria"
      >
        <option value="" >Selecione uma opção</option>
  <option value="">Todos</option>
  <option value="Sedan">Sedan</option>
  <option value="Hatch">Hatch</option>
        
      </select>
      </div>

    

      <div className='section-card'>
        <div>

      
        {filteredItems.map((item: Carro) => (
          <div className='car-card' key={item.id}>
            <img src={car} alt="Ilustração de um carro generico" />
          <div>
          <p className='model'>{item.modelo}</p>
          <p>{item.categoria}</p>
          <p><strong>R$ {item.preco}</strong></p>
          <div className='votar'>
          <p>Aprovação: {item.votos}</p>
          <button onClick={() => handleVote(item.id)}>+</button>    
          </div>
          
          <button className='add-cart' onClick={() => handleAddToCart(item)}>Adicionar ao Carrinho</button>        
          </div>
          </div>
        ))} 
      </div>   
     </div>   
     </section> 
     </>
  )
}

export default Listagem