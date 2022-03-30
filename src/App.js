import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
import Menubar from './components/menubar/Menubar';
import Orders from './components/Orders/Orders';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div >
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>
        <Route path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/orders' element={<Orders></Orders>} ></Route>
        <Route path='/inventory' element={<Inventory></Inventory>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
