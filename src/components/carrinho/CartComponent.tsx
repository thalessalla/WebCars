import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeItem } from '../../slices/CartSlices';
import "./CartComponent.css"
import car from "../../assets/car.svg";
import { Link } from 'react-router-dom';


const CartComponent: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className='container-confirmation'>
      <div>
      <h2>Seu Carrinho de Compras</h2>
      <div className='item-cart'>
        {cartItems.map(item => (
          <div key={item.id}>
            <div><img src={car} alt="Ilustração de carro generico" /></div>
            <div>
            <p>{item.modelo} </p>
            <p><strong>R$ {item.preco.toFixed(2)}</strong></p>
            <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
      <div className='confirmation-btn'>
      <Link to="/">
      <button>Voltar</button>
      </Link>
    </div>
      </div>
    </div>
  );
};

export default CartComponent;