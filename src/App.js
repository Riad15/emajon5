import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/menubar/Menubar';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div >
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>
        <Route path='/home' element={<Shop></Shop>} ></Route>
      </Routes>
      <Shop></Shop>
    </div>
  );
}

export default App;
