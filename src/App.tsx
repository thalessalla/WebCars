import './App.css';
import { Provider } from 'react-redux';
import Listagem from '../src/components/carList';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartComponent from './components/carrinho/CartComponent';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
   <>
   
   <Provider store={store}>
   <Router>
    <Header />
   <Routes>
    
        <Route path="/" element={<Listagem />} />
        <Route path="/carrinho" element={<CartComponent />} />      
   </Routes>     
    </Router>
    <Footer />
   </Provider>

     
   </>
  );
}

export default App;
