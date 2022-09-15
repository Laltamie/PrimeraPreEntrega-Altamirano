import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navegador/NavBar';
import Item from './components/Item/Item';


function App() {
  return (

    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Item />} />
        <Route path="/detalle/:detalleid" element={<ItemDetailContainer />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App;