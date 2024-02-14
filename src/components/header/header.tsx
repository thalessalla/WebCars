import "./header.css"
import logoP from "../../assets/Logo-s.svg"
import { Link } from "react-router-dom"
import carrinho from "../../assets/shopping_cart.svg"

function Header(){
  return(
     <>
     <div className="header">
      <div>
        <img src={logoP} alt="Logo pequeno de menu" />
        <Link to="/carrinho">
          <img className="carrinho-icon" src={carrinho} alt="Carrinho" />
        </Link>
        </div>
     </div>
     </>
  )
}

export default Header